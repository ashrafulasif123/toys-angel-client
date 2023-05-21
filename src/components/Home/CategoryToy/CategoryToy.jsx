import React, { useContext, useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { ProvideContext } from '../../../Authentication/Authentication';
import Swal from 'sweetalert2';


const CategoryToy = () => {
    const { user } = useContext(ProvideContext)
    const navigate = useNavigate()
    const [bears, setBears] = useState([])

    const [horses, setHorse] = useState([])
    const [dinosours, setDinosour] = useState([])
    const handleSingleToy = (id) => {
        if(user)
        {
            return navigate('singletoy/' + id);
        }
        else{
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'You have to log in first to view details',
              }) 
              navigate('/login')
        } 
        
    }

    useEffect(() => {
        fetch('https://toys-angel-server.vercel.app/toys?subCategory=beer-toy')
            .then(res => res.json())
            .then(data => setBears(data))
    }, [])
    useEffect(() => {
        fetch('https://toys-angel-server.vercel.app/toys?subCategory=horse-toy')
            .then(res => res.json())
            .then(data => setHorse(data))
    }, [])
    useEffect(() => {
        fetch('https://toys-angel-server.vercel.app/toys?subCategory=dinosaur-toy')
            .then(res => res.json())
            .then(data => setDinosour(data))
    }, [])


    return (
        <div className="container mx-auto mt-8">
            <h2 className='text-5xl text-center my-10'>Animal Toy</h2>
            <Tabs>
                <TabList className="flex justify-center mb-8">
                    <Tab className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md mr-2 focus:outline-none">
                        Bears Toy
                    </Tab>
                    <Tab className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md mr-2 focus:outline-none">
                        Horse Toy
                    </Tab>
                    <Tab className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md focus:outline-none">
                        Dinosaurs Toy
                    </Tab>
                </TabList>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {bears.map((bear) => (
                            <div className="card w-96  shadow-xl  border-blue-200 border-4">
                                <figure className="p-3">
                                    <img src={bear.picture} alt="Shoes" className="rounded-xl h-60 w-full" />
                                </figure>
                                <div className="card-body pt-0 items-center text-center">
                                    <h2 className="card-title text-3xl">{bear.name}</h2>
                                    <p>Price: ${bear.price}</p>
                                    <p>Rating: {bear.rating}</p>
                                    <div className="card-actions">

                                        {/* <Link to={`/singletoy/${bear._id}`}><button className="btn btn-info">View Details</button></Link> */}
                                        <button onClick={() => handleSingleToy(bear._id)} className="btn btn-info">View Details</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {horses.map((horse) => (
                            <div className="card w-96  shadow-xl border-blue-200 border-4">
                                <figure className="p-3">
                                    <img src={horse.picture} alt="Shoes" className="rounded-xl h-60 w-full" />
                                </figure>
                                <div className="card-body pt-0 items-center text-center">
                                    <h2 className="card-title text-3xl">{horse.name}</h2>
                                    <p>Price: ${horse.price}</p>
                                    <p>Rating: {horse.rating}</p>
                                    <div className="card-actions">
                                    <button onClick={() => handleSingleToy(horse._id)} className="btn btn-info">View Details</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {dinosours.map((dinosour) => (
                            <div className="card w-96  shadow-xl border-blue-200 border-4">
                                <figure className="p-3">
                                    <img src={dinosour.picture} alt="Shoes" className="rounded-xl h-60 w-full" />
                                </figure>
                                <div className="card-body pt-0 items-center text-center">
                                    <h2 className="card-title text-3xl">{dinosour.name}</h2>
                                    <p>Price: ${dinosour.price}</p>
                                    <p>Rating: {dinosour.rating}</p>
                                    <div className="card-actions">
                                    <button onClick={() => handleSingleToy(dinosour._id)} className="btn btn-info">View Details</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabPanel>
                {/* Add TabPanel and content for Horse Toy and Dinosaurs Toy */}
            </Tabs>
        </div>
    );
};

export default CategoryToy;