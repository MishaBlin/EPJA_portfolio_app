import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/router/root/page';
import Layout from './components/router/layout';
import Auth from './components/router/auth/page';
import Projects from './components/router/projects/page';

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
                    path: `/projects`,
                    element: <Projects />,
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
