import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import NavMenu from '../components/Shared/NavMenu/NavMenu';

const Main = () => {
    const navigation = useNavigation();
    return (
        <div>
            <NavMenu></NavMenu>
            <div className='container mx-auto'>
                <div className='text-center'>{navigation.state === 'loading' && <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>}</div>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Main;