import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full h-[600px]">
                <img src="https://images.pexels.com/photos/207891/pexels-photo-207891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-full" />
                <div className='absolute w-1/2 top-1/4 left-0 pl-20'>
                    <h1 className='text-7xl text-sky-400'>Bear toy is very attractive</h1>
                    <p className='text-xl text-gray-100 mt-4'>Introducing the adorable and huggable Write Bear toy, the perfect companion for children of all ages! With its soft, plush fur and lovable expression, this cuddly bear is ready to be your child's new best friend. But what sets Write Bear apart is its unique feature that encourages creativity and learning</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle bg-sky-400">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-sky-400">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-[600px]">
                <img src="https://images.pexels.com/photos/9873789/pexels-photo-9873789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-full" />
                <div className='absolute w-1/2 top-1/4 left-0 pl-20'>
                    <h1 className='text-7xl text-sky-400'>Horse toy is very attractive for children</h1>
                    <p className='text-xl text-gray-100 mt-4'>The Galloping Majesty Horse Toy is a magnificent companion for children who adore horses and imaginative play. This beautifully crafted toy captures the grace and elegance of a real horse, inspiring endless adventures and nurturing a love for these majestic creatures.</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle bg-sky-400">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-sky-400">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-[600px]">
                <img src="https://images.pexels.com/photos/6348905/pexels-photo-6348905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-full" />
                <div className='absolute w-1/2 top-1/4 left-0 pl-20'>
                    <h1 className='text-7xl text-sky-400'>Dinosour toy is looking attractive</h1>
                    <p className='text-xl text-gray-100 mt-4'>Introducing the Roaring Thunder Dinosaur Toy, a prehistoric adventure waiting to happen! This incredible toy brings the world of dinosaurs to life, captivating the imagination of young explorers and dinosaur enthusiasts alike.</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle bg-sky-400">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-sky-400">❯</a>
                </div>
            </div>
        </div>

    );
};

export default Banner;