import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import NavMenu from '../components/Shared/NavMenu/NavMenu';
import Footer from '../components/Shared/Footer/Footer';

const Main = () => {
    const navigation = useNavigation();
    return (
        <div>
            <NavMenu></NavMenu>
            <div className='container mx-auto'>
                <div className='text-center'>{navigation.state === 'loading' && <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden"><div className="radial-progress" style={{"--value":70}}></div></span>
                </div>}</div>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Main;