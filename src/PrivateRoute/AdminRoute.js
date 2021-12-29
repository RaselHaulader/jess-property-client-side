import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
const AdminRoute = ({ children }) => {
const user = useSelector(state=> state.user.userAuth)
const loading = useSelector(state=> state.user.loading)
    let location = useLocation();
  
    if (loading) { 
        return "loading...."
    }
    if (false) {
        return <Navigate to="/home" state={{ from: location }} />;
    }

    return children;
};

export default AdminRoute;