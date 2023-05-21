import React from 'react';
import CategoryToy from '../CategoryToy/CategoryToy';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import useTitle from '../../../hooks/useTitle';
import Info from '../../Information/Info';
import DinosourToy from '../DinosourToy/DinosourToy';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <CategoryToy></CategoryToy>
            <Info></Info>
            <DinosourToy></DinosourToy>

        </div>
    );
};

export default Home;