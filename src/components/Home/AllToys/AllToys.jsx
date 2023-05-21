import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToy from '../AllToy/AllToy';
import './AllToys.css'
import useTitle from '../../../hooks/useTitle';
import Swal from 'sweetalert2';

const AllToys = () => {
  const toysInformation = useLoaderData();
  const [allToys, setAllToys] = useState(toysInformation.slice(0, 20)); // Show the first 20 toys by default
  const handleSearchToy = event => {
    event.preventDefault();
    const form = event.target;
    const toyname = form.toyname.value;

    fetch(`https://toys-angel-server.vercel.app/toyname?name=${toyname}`)
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) {
          setAllToys(data)
        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Sory',
            text: 'Your searching Toy not found',
          })
          // console.log('data is not found')
        }
      })

    console.log(toyname)
  }

  useTitle('All Toys');

  return (
    <div className=''>
      <form onSubmit={handleSearchToy}>
        <div className="form-control w-1/2 mx-auto my-5">
          <div className="input-group">
            <input type="text" placeholder="Search by Toy name" name='toyname' className="input input-bordered w-full" />
            <button type='submit' className="btn btn-square btn-info text-black">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
          </div>
        </div>
      </form>
      <h2 className='text-4xl text-center my-10'>All Toys Information</h2>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          {/* head */}
          <thead>
            <tr className='bg-sky-300'>
              <th className='text-xl bg-sky-300 text-center'>Seller</th>
              <th className='text-xl bg-sky-300 text-center'>Toy Name</th>
              <th className='text-xl bg-sky-300 text-center'>Sub Category</th>
              <th className='text-xl bg-sky-300 text-center'>Price</th>
              <th className='text-xl bg-sky-300 text-center'>Available Quantity</th>
              <th className='text-xl bg-sky-300 text-center'>Details Description</th>
              <th className='text-xl bg-sky-300 text-center'></th>
            </tr>
          </thead>
          <tbody>
            {allToys.map((allToy, index) => (
              <AllToy key={index} allToy={allToy}></AllToy>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

};

export default AllToys;