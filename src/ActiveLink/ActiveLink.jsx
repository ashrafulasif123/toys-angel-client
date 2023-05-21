import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive
                    ? "bg-sky-300 rounded-md p-2 text-black"
                    : ""
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;