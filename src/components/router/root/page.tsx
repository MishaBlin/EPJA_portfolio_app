import React from 'react';
import Home from './home';
import Projects from './projects';
import About from './(about)/about';

export default function Root() {
    return (
        <div>
            <Home />
            <About />
            <Projects />
        </div>
    );
}
