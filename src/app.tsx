import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/router/root/page';
import Layout from './components/router/root/(root)/layout';
import Auth from './components/router/auth/page';
import pkg from '../package.json';
import ProjectDetail from './components/router/root/project/projectDetail';

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
