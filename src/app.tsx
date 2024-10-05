import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/router/root/page';
import Layout from './components/router/layout';
import Auth from './components/router/auth/page';
import ProjectDetail from './components/router/project/projectDetail';

const basePath = 'cats';

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
                    path: `/project/:id`,
                    element: <ProjectDetail />,
                },
                {
                    path: `/auth`,
                    element: <Auth />,
                },
            ],
        },
    ],
    {
        basename: `/${basePath}`,
    },
);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
