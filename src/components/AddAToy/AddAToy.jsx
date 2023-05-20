import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { ProvideContext } from '../../Authentication/Authentication';

const AddAToy = () => {
    const {user} = useContext(ProvideContext)
    const handleAddToy = event =>{
        event.preventDefault()
        const form = event.target;
        const picture = form.picture.value;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const toy = {picture, name, sellerName, sellerEmail, subCategory, price, rating, quantity, description}
        // console.log(toy)
        fetch('http://localhost:5000/toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toy)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    icon: 'success',
                    title: 'WOW',
                    text: 'You have Successfully Inserted',
                  })
            }
        })

        
    }


    return (
        <div className="max-w-2xl mx-auto bg-info rounded-lg overflow-hidden shadow-md border border-sky-700 mt-6">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4">
                <h2 className="text-2xl font-bold text-white">Add A Toy</h2>
            </div>
            <form onSubmit={handleAddToy} className="p-6">
                <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                        <label htmlFor="picture" className="block text-gray-700 font-bold mb-2">Picture URL</label>
                        <input type="text" name="picture" required className="w-full border border-gray-300 px-3 py-2 rounded" />
                    </div>
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
                        <input type="text" name="name" required className="w-full border border-gray-300 px-3 py-2 rounded" />
                    </div>
                    <div>
                        <label htmlFor="sellerName" className="block text-gray-700 font-bold mb-2">Seller Name:</label>
                        <input type="text" name="sellerName" defaultValue={user.displayName} readOnly className="w-full border border-gray-300 px-3 py-2 rounded" />
                    </div>
                    <div>
                        <label htmlFor="sellerEmail" className="block text-gray-700 font-bold mb-2">Seller Email:</label>
                        <input type="email" name="sellerEmail" defaultValue={user.email} readOnly className="w-full border border-gray-300 px-3 py-2 rounded" />
                    </div>
                    <div>
                        <label htmlFor="subCategory" className="block text-gray-700 font-bold mb-2">Sub-category:</label>
                        <select name="subCategory" required className="w-full border border-gray-300 px-3 py-2 rounded">
                            <option value="">Select sub-category</option>
                            <option value="beer-toy">Beer Toy</option>
                            <option value="horse-toy">Horse Toy</option>
                            <option value="dinosaur-toy">Dinosaur toy</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="price" className="block text-gray-700 font-bold mb-2">Price:</label>
                        <input type="number" name="price" required className="w-full border border-gray-300 px-3 py-2 rounded" />
                    </div>
                    <div>
                        <label htmlFor="rating" className="block text-gray-700 font-bold mb-2">Rating:</label>
                        <input type="number" name="rating" required className="w-full border border-gray-300 px-3 py-2 rounded" />
                    </div>
                    <div>
                        <label htmlFor="quantity" className="block text-gray-700 font-bold mb-2">Available Quantity:</label>
                        <input type="number" name="quantity" required className="w-full border border-gray-300 px-3 py-2 rounded" />
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Details Description:</label>
                        <textarea name="description" required rows="4" className="w-full border border-gray-300 px-3 py-2 rounded"></textarea>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button type="submit" className="bg-gradient-to-r  bg-blue-500  text-white font-bold py-2 px-4 rounded">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddAToy;