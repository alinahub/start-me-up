import React from 'react';
import { AuthRoute } from './AuthRoute';
import Routes from './Routes';

export default function MainNavigation() {
    return (
        <AuthRoute>
            <Routes />
        </AuthRoute>
    );
}
