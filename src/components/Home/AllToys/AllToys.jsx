import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToy from '../AllToy/AllToy';
import './AllToys.css'
import useTitle from '../../../hooks/useTitle';

const AllToys = () => {
    const toysInformation = useLoaderData()
    const [allToys, setAllToys] = useState(toysInformation)
    useTitle('All Toys')
    return (
        <div>
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
                        {
                            allToys.map((allToy, index) => <AllToy
                                key={index}
                                allToy={allToy}
                                
                            ></AllToy>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;