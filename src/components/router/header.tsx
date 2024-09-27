import { Link, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Separator } from '../ui/separator';
import { me, navLinks } from '../../lib/data';

export default function Header() {
    const location = useLocation();
    const [hash, setHash] = useState('');

    useEffect(() => {
        setHash(location.hash);
    }, [location]);

    return (
        <header className="sticky top-0 bg-background">
            <div className="py-4 flex justify-between items-center">
                <Link to="/" className="font-bold text-2xl">
                    {me.default}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-pink-600">
                        {me.colored}
                    </span>
                </Link>
                <nav>
                    <ul className="flex items-center gap-x-6">
                        <li>
                            <Link
                                to="#home"
                                className={
                                    hash === '#home' || hash === ''
                                        ? 'text-foreground'
                                        : 'text-muted-foreground'
                                }
                            >
                                Home
                            </Link>
                        </li>
                        {navLinks.map((link) => (
                            <li key={link.title}>
                                <Link
                                    to={link.href}
                                    className={
                                        hash === link.href
                                            ? 'text-foreground'
                                            : 'text-muted-foreground'
                                    }
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <Separator className="text-gray-400" />
        </header>
    );
}
