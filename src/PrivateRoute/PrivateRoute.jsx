import React, { useContext } from 'react';
import { ProvideContext } from '../Authentication/Authentication';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = ({ children }) => {
    const location = useLocation()
    console.log(location)
    const { user, loading } = useContext(ProvideContext);

    if(loading){
        return <center><div className="radial-progress" style={{"--value":70}}>100%</div></center>
         
    }    
    if(user){
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;