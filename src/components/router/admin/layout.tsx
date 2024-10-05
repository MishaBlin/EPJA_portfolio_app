import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import AdminHeader from './header';

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
            <AdminHeader />
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
}
