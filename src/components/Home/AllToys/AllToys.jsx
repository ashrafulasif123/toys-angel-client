import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToy from '../AllToy/AllToy';

const AllToys = () => {
    const allToys = useLoaderData()
    console.log(allToys)
    return (
        <div>
            <h2 className='text-5xl text-center my-10'>All Toys Information</h2>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th>company</th>
                            <th>location</th>
                            <th>Last Login</th>
                            <th></th>
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