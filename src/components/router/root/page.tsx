import React from 'react';
import Home from './home';
import About from './about';
import Projects from './projects';

export default function Root() {
    return (
        <div>
            <Home />
            <About />
            <Projects />
        </div>
    );
}
