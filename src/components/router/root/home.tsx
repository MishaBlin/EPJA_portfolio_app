import { Link } from 'react-router-dom';
import React from 'react';
import { links } from '../../../lib/data';
import { ShineBorder } from '../../ui/shine-border';

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
                    <Link to={links[0].href}>Доступен для предложений</Link>
                </ShineBorder>
            </div>

            <h1 className="text-foreground">
                Привет! Я{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-pink-600">
                    FullStack
                </span>{' '}
                разработчик, создающий современные веб-приложения.
            </h1>
            <span className="mt-5 text-lg text-muted-foreground max-w-screen-md block mx-auto">
                На данный момент я проживаю в Иннополисе. В своей работе мне
                нравится использовать Next.js, React, Tailwind CSS, а так же
                Python и FastApi.
            </span>
        </div>
    );
}
