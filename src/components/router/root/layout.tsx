import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

export default function Layout() {
    return (
        <div className="container max-w-screen-xl flex flex-col text-white h-full">
            <Header />
            <div className="flex-1">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}
