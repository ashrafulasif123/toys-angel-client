import React from 'react';
import CategoryToy from '../CategoryToy/CategoryToy';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <CategoryToy></CategoryToy>

        </div>
    );
};

export default Home;