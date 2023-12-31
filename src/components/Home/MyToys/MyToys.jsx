import React, { useContext, useEffect, useState } from 'react';
import { ProvideContext } from '../../../Authentication/Authentication';
import MyToy from '../MyToy/MyToy';
import useTitle from '../../../hooks/useTitle';

const MyToys = () => {
    const { user } = useContext(ProvideContext)
    const [myToys, setMyToys] = useState([])
    const [remaining, setRemaining] = useState(true)
    console.log(user)
    useTitle('My Toys')


    useEffect(() => {
        fetch(`https://toys-angel-server.vercel.app/mytoys?sellerEmail=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [remaining])
    return (
        <div>
            <h2 className='text-4xl text-center my-10'>My Toys Information</h2>
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
                                <th className='text-xl bg-sky-300 text-center'>Detail description</th>
                                <th className='text-xl bg-sky-300 text-center'>Action</th>
                            </tr>
                        </thead>
                        
                   
                    <tbody>
                        {
                            myToys.map((myToy, index) => <MyToy
                                key={index}
                                myToy={myToy}
                                remaining={remaining}
                                setRemaining={setRemaining}

                            ></MyToy>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;