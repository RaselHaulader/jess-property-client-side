import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const RequireAuth = ({ children }) => {
    let {user} = useAuth();
    let location = useLocation();

    if (!user.email) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return children;
}

export default RequireAuth;