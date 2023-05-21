import React from 'react';

const Info = () => {
    return (
        <div className="hero min-h-screen mt-4" style={{ backgroundImage: `url("https://images.pexels.com/photos/1319572/pexels-photo-1319572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Animal Toy Info.....</h1>
                    <p className="mb-5">Animal toys are popular playthings designed to resemble various animals. They come in a wide range of shapes, sizes, materials, and functionalities. Animal toys serve different purposes, including entertainment, education, companionship, and even therapeutic benefits. Here is some general information about animal toys</p>
                </div>
            </div>
        </div>
    );
};

export default Info;