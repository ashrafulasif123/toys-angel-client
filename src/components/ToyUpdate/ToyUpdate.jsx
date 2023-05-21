import React, { useState } from 'react';
import {useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ToyUpdate = () => {
    const myToy = useLoaderData()
    const [toy, setToy] = useState(myToy)
    const {name, description, price, quantity, _id } = toy;
    const navigate = useNavigate()
    console.log(toy)
    const handleUpdateToy = event => {
        event.preventDefault()
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const toy = { price, quantity, description }
        console.log(toy)
        fetch(`https://toys-angel-server.vercel.app/toys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'WOW',
                        text: 'Successfully Updated',
                    })
                    navigate('/my-toys')
                }
            })


    }
    return (
        <div className="max-w-2xl mx-auto bg-info rounded-lg overflow-hidden shadow-md border border-sky-700 mt-6">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4">
                <h2 className="text-2xl font-bold text-white">Update Toy :{name}</h2>
            </div>
            <form onSubmit={handleUpdateToy} className="p-6">
                <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                        <label htmlFor="price" className="block text-gray-700 font-bold mb-2">Price</label>
                        <input type="text" name="price" defaultValue={price} required className="w-full border border-gray-300 px-3 py-2 rounded" />
                    </div>
                    <div>
                        <label htmlFor="quantity" className="block text-gray-700 font-bold mb-2">Available Quantity</label>
                        <input type="text" name="quantity" defaultValue={quantity} required className="w-full border border-gray-300 px-3 py-2 rounded" />
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
                        <textarea type="text" name="description" defaultValue={description} required className="w-full border border-gray-300 px-3 py-2 rounded" ></textarea>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button type="submit" className="bg-gradient-to-r  bg-blue-500  text-white font-bold py-2 px-4 rounded">
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ToyUpdate;