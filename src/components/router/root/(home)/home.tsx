import { Link } from 'react-router-dom';
import React from 'react';
import { links } from '../../../../lib/data';
import { ShineBorder } from '../../../ui/shine-border';

export default function Home() {
    return (
        <div
            className="mt-32 mb-16 max-w-screen-lg text-center font-bold text-4xl md:text-5xl lg:text-6xl mx-auto"
            id="home"
        >
            <div className="flex justify-center mb-5">
                <ShineBorder
                    className="text-center text-base p-4 font-bold bg-background text-foreground"
                    color={['#be123c', '#db2777']}
                >
                    <Link to={links[0].href}>Available for work</Link>
                </ShineBorder>
            </div>

            <h1 className="text-foreground">
                Hello! I&rsquo;m{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-pink-600">
                    FullStack
                </span>{' '}
                developer, creating modern web-apps.
            </h1>
            <span className="mt-5 text-lg text-muted-foreground max-w-screen-md block mx-auto">
                For now I am learning in{' '}
                <Link to="https://innopolis.university/" target="_blank">
                    Innopolis University
                </Link>{' '}
                at Bachelor 3rd and working as Frontend Developer in{' '}
                <Link to="https://openai.com/" target="_blank">
                    Open AI
                </Link>
                .
            </span>
        </div>
    );
}
