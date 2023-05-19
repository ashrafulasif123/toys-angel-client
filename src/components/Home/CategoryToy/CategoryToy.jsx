import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const CategoryToy = () => {
    const [bears, setBears] = useState([])

    const [horses, setHorse] = useState([])
    const [dinosours, setDinosour] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/toys?subCategory=beer-toy')
            .then(res => res.json())
            .then(data => setBears(data))
    }, [])
    useEffect(() => {
        fetch('http://localhost:5000/toys?subCategory=horse-toy')
            .then(res => res.json())
            .then(data => setHorse(data))
    }, [])
    useEffect(() => {
        fetch('http://localhost:5000/toys?subCategory=dinosaur-toy')
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
                            <div className="card w-96  shadow-xl bg-indigo-200">
                                <figure className="p-3">
                                    <img src={bear.picture} alt="Shoes" className="rounded-xl h-60 w-full" />
                                </figure>
                                <div className="card-body pt-0 items-center text-center">
                                    <h2 className="card-title">{bear.name}</h2>
                                    <p>Price: ${bear.price}</p>
                                    <p>Rating: {bear.rating}</p>
                                    <div className="card-actions">
                                        <button className="btn btn-info">View Details</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {horses.map((horse) => (
                            <div className="card w-96  shadow-xl bg-indigo-200">
                                <figure className="p-3">
                                    <img src={horse.picture} alt="Shoes" className="rounded-xl h-60 w-full" />
                                </figure>
                                <div className="card-body pt-0 items-center text-center">
                                    <h2 className="card-title">{horse.name}</h2>
                                    <p>Price: ${horse.price}</p>
                                    <p>Rating: {horse.rating}</p>
                                    <div className="card-actions">
                                        <button className="btn btn-info">View Details</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {dinosours.map((dinosour) => (
                            <div className="card w-96  shadow-xl bg-indigo-200">
                                <figure className="p-3">
                                    <img src={dinosour.picture} alt="Shoes" className="rounded-xl h-60 w-full" />
                                </figure>
                                <div className="card-body pt-0 items-center text-center">
                                    <h2 className="card-title">{dinosour.name}</h2>
                                    <p>Price: ${dinosour.price}</p>
                                    <p>Rating: {dinosour.rating}</p>
                                    <div className="card-actions">
                                        <button className="btn btn-info">View Details</button>
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