import React from 'react';

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