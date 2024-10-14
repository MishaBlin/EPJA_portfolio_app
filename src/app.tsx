import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/router/root/(root)/page';
import Layout from './components/router/root/layout';
import Auth from './components/router/auth/page';
import pkg from '../package.json';
import ProjectDetail from './components/router/root/project/projectDetail';
import AdminLayout from './components/router/admin/layout';
import AdminPage from './components/router/admin/page';

const router = createBrowserRouter(
    [
        {
            element: <Layout />,
            children: [
                {
                    path: ``,
                    element: <Root />,
                },
                {
                    path: '/project/:id',
                    element: <ProjectDetail />,
                },
            ],
        },

        {
            element: <AdminLayout />,
            children: [
                {
                    path: `/admin`,
                    element: <AdminPage />,
                },
            ],
        },

        {
            path: `/auth`,
            element: <Auth />,
        },
    ],
    {
        basename: `/${pkg.name}`,
    },
);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
