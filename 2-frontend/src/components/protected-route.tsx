import React from 'react'
import { Navigate } from 'react-router-dom';
import { UserModel } from '../models/user-model';

interface ProtectedRouteProps {
    user?: UserModel
    children: JSX.Element
}

const ProtectedRoute = ({ user, children }: ProtectedRouteProps) => {
    if (!user) {
        return <Navigate to="/" replace />;
    }
    return children;
};

export default ProtectedRoute