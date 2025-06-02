//Protected.jsx
import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
// import { useAuth } from "../../Contexts/AuthContext"; 

const Protected = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.authentication.isAuthenticated)

  return isAuthenticated? <Outlet /> : <Navigate to="/" />;
};

export default Protected;