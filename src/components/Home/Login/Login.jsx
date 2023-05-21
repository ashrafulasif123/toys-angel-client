import React, { useContext } from 'react';
import { ProvideContext } from '../../../Authentication/Authentication';
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../../../hooks/useTitle';


const Login = () => {
    const {signInUser, signWithGoogle} = useContext(ProvideContext)
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
    useTitle('Login')
    const from = location?.state?.from?.pathname || '/';
    


    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const password = form.password.value;
        const email = form.email.value;
        signInUser(email, password)
        .then(result =>{
            Swal.fire({
                icon: 'success',
                title: 'WOW',
                text: 'You have Successfully Login',
              })
              navigate(from, {replace: true})
        })
        .catch(error =>{
            Swal.fire({
                icon: 'error',
                title: 'OOPs',
                text: 'wrong email or password',
              })
        })
    }
    const handleGoogleSignIn = () =>{
        signWithGoogle()
        .then(result =>{
            Swal.fire({
                icon: 'success',
                title: 'WOW',
                text: 'You have Successfully Login',
              })
              navigate(from, {replace: true})
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <>
            <div className="max-w-2xl mx-auto bg-info rounded-lg overflow-hidden shadow-md border border-sky-700 mt-6">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4">
                    <h2 className="text-2xl font-bold text-white">Login</h2>
                </div>
                <form onSubmit={handleLogin} className="p-6">
                    <div className="mb-6">
                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
                            <input required type="email" name="email" className="w-full border border-gray-300 px-3 py-2 rounded" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                            <input required type="password" name="password" className="w-full border border-gray-300 px-3 py-2 rounded" />
                        </div>

                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className="bg-gradient-to-r  bg-blue-500  text-white font-bold py-2 px-4 rounded">
                            Login
                        </button>
                    </div>
                </form>

            </div>
            <div className='text-center mt-4'>
                <button onClick={handleGoogleSignIn} className="btn btn-outline btn-info"><FaGoogle /> <span className='ms-3 font-extrabold'>Sign in With Google</span> </button>
                <p className='mt-3'>If you are not registered go to The<Link to='/register' className="link link-info font-bold"> Register</Link></p>
            </div>
        </>
    );
};

export default Login;