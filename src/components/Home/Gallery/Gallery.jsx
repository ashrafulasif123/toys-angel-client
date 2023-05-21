import React from 'react';

const Gallery = () => {
    return (
        <div>
            <h2 className='text-5xl text-center my-10'>Toy Gallery</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3">
                <div data-aos="zoom-in-up" className="p-2 rounded-lg">
                    <img src="https://images.pexels.com/photos/46178/teddy-bear-bear-children-toys-forest-46178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 1" className="w-full h-auto rounded-lg" />
                </div>
                <div data-aos="zoom-in" className="p-2">
                    <img src="https://images.pexels.com/photos/1166473/pexels-photo-1166473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 2" className="w-full h-auto rounded-lg" />
                </div>
                <div data-aos="zoom-in-down" className="p-2">
                    <img src="https://images.pexels.com/photos/712857/pexels-photo-712857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 3" className="w-full h-auto rounded-lg" />
                </div>
                <div data-aos="zoom-out" className="p-2">
                    <img src="https://images.pexels.com/photos/4090991/pexels-photo-4090991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 4" className="w-full h-auto rounded-lg" />
                </div>
                <div data-aos="zoom-out-up" className="p-2">
                    <img src="https://images.pexels.com/photos/8014486/pexels-photo-8014486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 5" className="w-full h-auto rounded-lg" />
                </div>
                <div data-aos="zoom-out-left" className="p-2">
                    <img src="https://images.pexels.com/photos/8014485/pexels-photo-8014485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 6" className="w-full h-auto rounded-lg" />
                </div>
            </div>
        </div>

    );
};

export default Gallery;