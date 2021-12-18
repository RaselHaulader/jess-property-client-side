import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const AdminRoute = ({ children }) => {
    let { user, loading } = useAuth();
    let location = useLocation();
    if (loading) { 
        return "loading...."
    }
    if (!user.email) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return children;
};

export default AdminRoute;