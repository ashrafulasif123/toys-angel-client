import React from 'react';

const AllToy = ({ allToy }) => {
    const { description, name, picture, price, quantity, rating, sellerEmail, sellerName, subCategory, _id} = allToy
    return (
        <tr className='bg-sky-400'>
            <td className='text-lg bg-sky-100 border border-gray-400 text-center'>{sellerName}</td>
            <td className='text-lg bg-sky-100 border border-gray-400 text-center'>{name}</td>
            <td className='text-lg bg-sky-100 border border-gray-400 text-center'>{subCategory}</td>
            <td className='text-lg bg-sky-100 border border-gray-400 text-center'>${price}</td>
            <td className='text-lg bg-sky-100 border border-gray-400 text-center'>{quantity}</td>
            <td className='text-lg bg-sky-100 border border-gray-400 text-center'>{description}</td>
            <td className='text-lg bg-sky-100 border border-gray-400 text-center'><button className="btn btn-active btn-ghost btn-xs">View Details</button></td>
        </tr>
    );
};

export default AllToy;