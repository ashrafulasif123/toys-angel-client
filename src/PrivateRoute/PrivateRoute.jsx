import React, { useContext } from 'react';
import { ProvideContext } from '../Authentication/Authentication';
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(ProvideContext);

    if(loading){
        return <center><div className="radial-progress" style={{"--value":70}}>100%</div></center>
         
    }    
    if(user){
        return children;
    }

    return <Navigate to='/login' replace></Navigate>
};

export default PrivateRoute;