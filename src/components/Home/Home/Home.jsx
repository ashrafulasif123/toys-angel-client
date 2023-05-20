import React from 'react';
import CategoryToy from '../CategoryToy/CategoryToy';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import useTitle from '../../../hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <CategoryToy></CategoryToy>

        </div>
    );
};

export default Home;