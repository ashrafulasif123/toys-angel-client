import React from 'react';
import { Outlet } from 'react-router-dom';
import NavMenu from '../components/Shared/NavMenu/NavMenu';

const Main = () => {
    return (
        <div>
            <NavMenu></NavMenu>
            <div className='container mx-auto'>
            <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Main;