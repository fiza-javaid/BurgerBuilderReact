import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setMyOrder } from "../redux/order/orderSlice";

import axios from "axios";
export const Contact = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const myOrder = useSelector((state) => state.order.myOrder);
    const recentOrder = useSelector((state) => state.order.recentOrder);
    const myCurrentUser = useSelector((state) => state.authentication.currentuser);
    const {
        saladCount,
        baconCount,
        cheeseCount,
        meatCount,
        price
    } = recentOrder;
    const [name, setName] = useState("");
    const [user_email, setEmail] = useState("");
    const [street, setStreet] = useState("");
    const [zipcode, setZipcode] = useState(""); 
    const [country, setCountry] = useState("");
    const [delivery, setDelivery] = useState("fastest");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !user_email || !street || !zipcode || !country) return;

        try {
            const res = await axios.post("http://localhost:8800/api/orders", {
                email: myCurrentUser.email,
                saladCount,
                baconCount,
                cheeseCount,
                meatCount,
                price
            });


            if (res.status == 200) {
                dispatch(setMyOrder([...myOrder, recentOrder]));
                navigate("/");
            }

        } catch (error) {
            console.log(error)

        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen mt-10 mb-10">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                    Enter your Contact Data
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Your Name*</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600">Your Email*</label>
                        <input
                            type="email"
                            value={user_email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600">Street*</label>
                        <input
                            type="text"
                            value={street}
                            onChange={(e) => setStreet(e.target.value)}
                            placeholder="Enter your street"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600">ZIP Code*</label>
                        <input
                            type="text"
                            value={zipcode}
                            onChange={(e) => setZipcode(e.target.value)}
                            placeholder="Enter your ZIP code"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600">Country*</label>
                        <input
                            type="text"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            placeholder="Enter your country"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600">Delivery Method*</label>
                        <select
                            value={delivery}
                            onChange={(e) => setDelivery(e.target.value)}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        >
                            <option value="fastest">Fastest</option>
                            <option value="cheapest">Cheapest</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        disabled={!name || !user_email || !street || !zipcode || !country}
                        className={`px-5 py-2 rounded-md transition ml-35 ${!name || !user_email || !street || !zipcode || !country
                            ? "text-gray-400 cursor-not-allowed bg-gray-100"
                            : "bg-transparent text-green-600 hover:bg-gray-100 cursor-pointer"
                            }`}
                    >
                        <strong>ORDER</strong>
                    </button>
                </form>
            </div>
        </div>
    );
};
