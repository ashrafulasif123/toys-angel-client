import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProvideContext } from '../../../Authentication/Authentication';
import Swal from 'sweetalert2';

const NavMenu = () => {
    const { user, userSignOut } = useContext(ProvideContext)
    const handleSignOut = () => {
        userSignOut()
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    text: 'You have Successfully Logout',
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    const [isOpen, setIsOpen] = React.useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <nav className="bg-blue-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <Link to="/">
                                <img
                                    className="h-8 w-8 ms-6 rounded"
                                    src="https://png.pngtree.com/png-clipart/20220601/original/pngtree-kids-title-event-vector-icon-design-illustration-template-png-image_7843573.png"
                                    alt="Website Logo"
                                />
                                <span className="ml-2 text-white font-bold">Anjel Toys</span>
                            </Link>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center">
                                <Link
                                    to="/"
                                    className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-blue-600"
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/all-toys"
                                    className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-blue-600"
                                >
                                    All Toys
                                </Link>
                                <Link
                                    to="/my-toys"
                                    className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-blue-600"
                                >
                                    My Toys
                                </Link>
                                <Link
                                    to="/add-toy"
                                    className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-blue-600"
                                >
                                    Add a Toy
                                </Link>
                                <Link
                                    to="/blogs"
                                    className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-blue-600"
                                >
                                    Blogs
                                </Link>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center">
                                { user &&
                                     
                                     <img
                                     title={user.displayName}
                                         className="h-8 w-8 rounded-full"
                                         src={user?.photoURL}
                                         alt="Not Found"
                                     />
                                    
                                 
                                }
                               
                                {
                                    user ?
                                        <button onClick={handleSignOut} className="ml-2 px-3 py-2 rounded-md text-sm font-medium text-white bg-yellow-400 hover:bg-blue-600">
                                            LogOut
                                        </button>
                                        :
                                        <Link to="/login">
                                            <button className="ml-2 px-3 py-2 rounded-md text-sm font-medium text-white bg-sky-400 hover:bg-blue-600">
                                                Login
                                            </button>
                                        </Link>
                                }





                                <Link to="/register">
                                    <button className="ml-2 px-3 py-2 rounded-md text-sm font-medium text-white bg-blue-700 hover:bg-blue-600">
                                        Register
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={toggleNavbar}
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600 focus:text-white"
                                aria-expanded="false"
                            >
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                                <svg
                                    className="hidden h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            to="/"
                            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-600"
                        >
                            Home
                        </Link>
                        <Link
                            to="/all-toys"
                            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-600"
                        >
                            All Toys
                        </Link>
                        <Link
                            to="/my-toys"
                            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-600"
                        >
                            My Toys
                        </Link>
                        <Link
                            to="/add-toy"
                            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-600"
                        >
                            Add a Toy
                        </Link>
                        <Link
                            to="/blogs"
                            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-600"
                        >
                            Blogs
                        </Link>
                    </div>
                    <div className="pt-4 pb-3 border-t border-blue-700">
                        <div className="flex items-center px-5">
                            <div className="flex-shrink-0">
                                <img
                                    className="h-10 w-10 rounded-full"
                                    src="/path/to/profile-picture.png"
                                    alt="User Profile Picture"
                                />
                            </div>
                            <div className="ml-3">
                                <div className="text-base font-medium text-white">User Name</div>
                            </div>
                        </div>
                        <div className="mt-3 px-2 space-y-1">
                            <Link to="/login">
                                <button className=" ml-2 px-3 py-2 rounded-md text-sm font-medium text-white bg-sky-400 hover:bg-blue-600">
                                    Login
                                </button>
                            </Link>
                            <Link to="/register">
                                <button className="ml-2 px-3 py-2 rounded-md text-sm font-medium text-white bg-blue-700 hover:bg-blue-600">
                                    Register
                                </button>
                            </Link>
                            <button onClick={handleSignOut} className="ml-2 px-3 py-2 rounded-md text-sm font-medium text-white bg-yellow-400 hover:bg-blue-600">
                                LogOut
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavMenu;