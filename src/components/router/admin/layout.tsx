import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../root/header';

export default function AdminLayout() {
    const navigate = useNavigate();

    useEffect(() => {
        if (
            !localStorage.getItem('token') ||
            localStorage.getItem('token') === 'undefined'
        ) {
            navigate('/auth');
        }
    }, []);

    return (
        <div className="container max-w-screen-xl flex flex-col text-white h-full">
            <Header />
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
}
