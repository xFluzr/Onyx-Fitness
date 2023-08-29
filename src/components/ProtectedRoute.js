import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ( {children,loggedIn} ) => {
    
    if(!loggedIn) {
        return <Navigate to="/login" />;
    }

    return children;
}

export default ProtectedRoute;
