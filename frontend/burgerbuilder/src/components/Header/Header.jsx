//Header.jsx
import React from 'react'   
import { useEffect, useState } from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from "../../redux/authentication/authenticationSlice";
import { clearAllOrders } from '../../redux/order/orderSlice';
// import { useAuth } from '../../Contexts/AuthContext';
export default function Header() {

    const isAuthenticated = useSelector((state) => state.authentication.isAuthenticated)
    const navigate = useNavigate();
    const dispatch = useDispatch()



    const handleSignOut = () => {
        dispatch(logout());
        // dispatch(clearAllOrders());
        navigate("/");
      };

    
    return (
        <header className="bg-yellow-900 ">
            <nav className=" border-gray-200 px-4 py-0.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <div className= "px-2 py-2 bg-white rounded-md">
                    <Link to="/" className="flex justify-items-center focus:outline-none">
                        <img
                            src="burger-logo.png"
                            className="h-8"
                            alt="Logo"
                        />
                    </Link>
                    </div>
                    <div className="flex items-center lg:order-2">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `text-white ${isActive ? "bg-yellow-700 border-b-4 border-sky-300" : "hover:bg-yellow-700 hover:border-b-4 border-sky-300"} py-4 px-8`
                            }
                        >
                            Burger Builder
                        </NavLink>

                        {isAuthenticated ? (
                            <>
                                <NavLink
                                    to="/order"
                                    className={({ isActive }) =>
                                        `text-white ${isActive ? "bg-yellow-700 border-b-4 border-sky-300" : "hover:bg-yellow-700 hover:border-b-4 border-sky-300"} py-4 px-8`
                                    }
                                >
                                    Orders
                                </NavLink>
                                <button
                                    onClick={handleSignOut}
                                    className="text-white hover:bg-red-700 border-b-4 border-sky-300 py-4 px-8"
                                >
                                    Sign Out
                                </button>
                            </>
                        ) : (
                            <NavLink
                                to="/authenticate"
                                className={({ isActive }) =>
                                    `text-white ${isActive ? "bg-yellow-700 border-b-4 border-sky-300" : "hover:bg-yellow-700 hover:border-b-4 border-sky-300"} py-4 px-8`
                                }
                            >
                                Authenticate
                            </NavLink>
                        )}
                    </div>
                       
                </div>
            </nav>
        </header>
    );
}