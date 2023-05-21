import React from 'react';
import { Link } from 'react-router-dom';

const AllToy = ({ allToy }) => {
    const { description, name, picture, price, quantity, rating, sellerEmail, sellerName, subCategory, _id } = allToy
    return (
        <tr className='bg-sky-400'>
            <td className='text-lg bg-sky-100 border border-gray-400 text-center'>{sellerName}</td>
            <td className='text-lg bg-sky-100 border border-gray-400 text-center'>{name}</td>
            <td className='text-lg bg-sky-100 border border-gray-400 text-center'>{subCategory}</td>
            <td className='text-lg bg-sky-100 border border-gray-400 text-center'>${price}</td>
            <td className='text-lg bg-sky-100 border border-gray-400 text-center'>{quantity}</td>
            <td className='text-lg bg-sky-100 border border-gray-400 text-center'>{description}</td>
            <td className='text-lg bg-sky-100 border border-gray-400 text-center'>
                <Link to={`/singletoy/${_id}`}><button className="btn btn-info btn-sm">View Details</button></Link>
            </td>
        </tr>
    );
};

export default AllToy;