import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToy = ({ myToy, remaining, setRemaining }) => {
    const { description, name, picture, price, quantity, rating, sellerEmail, sellerName, subCategory, _id } = myToy
    const handleDelete = (_id) =>{
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://toys-angel-server.vercel.app/toys/${_id}` , {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data =>{
                    if(data.deletedCount > 0){
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                          setRemaining(!remaining)
                    }
                   
                })
              
            }
          })
    }

    return (
        <tr className='bg-sky-400'>
            <td className='text-lg bg-sky-100 border border-gray-400 text-center'>{sellerName}</td>
            <td className='text-lg bg-sky-100 border border-gray-400 text-center'>{name}</td>
            <td className='text-lg bg-sky-100 border border-gray-400 text-center'>{subCategory}</td>
            <td className='text-lg bg-sky-100 border border-gray-400 text-center'>${price}</td>
            <td className='text-lg bg-sky-100 border border-gray-400 text-center'>{quantity}</td>
            <td className='text-lg bg-sky-100 border border-gray-400 text-center'>{description}</td>
            <td className='text-lg bg-sky-100 border border-gray-400 text-center'>
                <button onClick={ () => handleDelete(_id)} className="btn btn-active bg-red-800 border-0 btn-xs mr-3">Delete</button>
                <Link to={`/toyupdate/${_id}`}><button className="btn btn-active bg-blue-400 border-0 btn-xs">Update</button></Link>
            </td>
        </tr>
    );
};

export default MyToy;