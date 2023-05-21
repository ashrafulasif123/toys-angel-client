import React from 'react';

const DinosourToy = () => {
    return (
        <div className="animal-toy-description w-full text-white" style={{ backgroundImage: 'linear-gradient(to right, #87CEFA, #FFFFFF, #87CEFA)   ' }}>
            <h2 className="text-4xl text-center text-black py-10 font-semibold">Dinosour Plush Toy</h2>
            <div className='flex  flex-col md:flex-row justify-center gap-3'>
                <img className="w-[100%] max-w-md" src="https://images.pexels.com/photos/7734156/pexels-photo-7734156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="dinosour Plush Toy" />
                <img className="w-[100%] max-w-md" src="https://images.pexels.com/photos/14571911/pexels-photo-14571911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

            </div>
            <p className="text-lg mt-4 text-center w-3/4 mx-auto text-gray-950 font-semibold p-10">
                This adorable dinosour plush toy is perfect for any animal lover. It is made
                of soft and cuddly material, making it great for hugging and snuggling.
                The dinosour features realistic details, including a majestic mane and
                embroidered facial features. Bring home this cute companion today!
            </p>
        </div>
    );
};

export default DinosourToy;