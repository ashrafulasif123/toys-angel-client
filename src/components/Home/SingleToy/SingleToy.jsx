import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const SingleToy = () => {
    const singleToy = useLoaderData()
    const { description, name, picture, price, quantity, rating, sellerEmail, sellerName, subCategory, _id } = singleToy
    console.log(singleToy)
    return (
        <div className='bg-base-200'>
        <h2 className='text-5xl font-bold text-center py-6'>Toy Information</h2>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row p-10">
                    <img src={picture} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='space-y-4'>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="text-2xl"><span className='font-bold'>Seller Name:</span> {sellerName}</p>
                        <p className="text-xl"><span className='font-bold'>Seller Email:</span> {sellerEmail}</p>
                        <p className="text-lg"><span className='font-bold'>Price:$</span> {price}</p>
                        <p className=""><span className='font-bold'>Rating:</span> {rating}</p>
                        <p className=""><span className='font-bold'>Available Quantity:</span> {quantity}</p>
                        <p className=""><span className='font-bold'>Details:</span> {description}</p>
                        <Link to='/all-toys'><button className='btn btn-info mt-3'>Back to All Toys</button></Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SingleToy;
