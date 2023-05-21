import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ProvideContext } from '../../../Authentication/Authentication';
import useTitle from '../../../hooks/useTitle';

const Register = () => {
    const {registerUser, userUpdate} = useContext(ProvideContext)
    const [errormessage, setError] = useState(null)
    useTitle('Register')
    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const picture = form.picture.value;
        const name = form.name.value;
        const password = form.password.value;
        const email = form.email.value;
        registerUser(email, password)
        .then(result =>{
            const loggedUser = result.user;
            userUpdate(name, picture)
            .then( () =>{
                console.log('You have successfully updated')
            })
            // const loggedUser = result.user;
            Swal.fire({
                icon: 'success',
                title: 'WOW',
                text: 'You have Successfully Registered',
              })
        })
        .catch(error =>{
            setError(error.message)
            // Swal.fire({
            //     icon: 'error',
            //     title: 'Oops...',
            //     text: 'email-already-in-use',
            //   })
        })

        const toy = { picture, name, password, email }
        console.log(toy)
    }
    return (
        <>
        <h1 data-aos="zoom-in-up" className='text-center my-5 text-2xl text-red-600'>{errormessage}</h1>
            <div className="max-w-2xl mx-auto bg-info rounded-lg overflow-hidden shadow-md border border-sky-700 mt-6">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4">
                    <h2 className="text-2xl font-bold text-white">Register</h2>
                </div>
                <form onSubmit={handleRegister} className="p-6">
                    <div className="grid grid-cols-2 gap-6 mb-6">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                            <input required type="text" name="name" className="w-full border border-gray-300 px-3 py-2 rounded" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
                            <input required type="email" name="email" className="w-full border border-gray-300 px-3 py-2 rounded" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                            <input required type="password" name="password" className="w-full border border-gray-300 px-3 py-2 rounded" />
                        </div>
                        <div>
                            <label htmlFor="picture" className="block text-gray-700 font-bold mb-2">Photo URL</label>
                            <input required type="text" name="picture" className="w-full border border-gray-300 px-3 py-2 rounded" />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className="bg-gradient-to-r  bg-blue-500  text-white font-bold py-2 px-4 rounded">
                            Register
                        </button>
                    </div>
                </form>
            </div>
            <div className='text-center mt-4'>
                <p className='mt-3'>If you are Already registered go to The<Link to='/login' className="link link-info font-bold"> Login</Link></p>
            </div>
        </>
    );
};

export default Register;