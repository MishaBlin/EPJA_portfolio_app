import { Link, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Separator } from '../../ui/separator';
import { Skeleton } from '../../ui/skeleton';
import { useGetApi } from '../../../lib/api/useApi';
import { fetcher } from '../../../lib/api/root';
import EditNavLinks from './(admin)/edit-nav-links';

export default function AdminHeader({ nickname }) {
    const location = useLocation();
    const [hash, setHash] = useState('');

    useEffect(() => {
        setHash(location.hash);
    }, [location]);

    const { data: navLinks, isLoading: navLinksLoading } = useGetApi(
        'nav-links',
        fetcher,
    );

    const [links, setLinks] = React.useState<{ title: string; href: string }[]>(
        [],
    );

    useEffect(() => {
        if (navLinks) {
            setLinks(navLinks);
        }
    }, [navLinks]);

    return (
        <header className="sticky top-0 bg-background z-50">
            <div className="py-4 flex justify-between items-center">
                {!nickname ? (
                    <Skeleton className="w-[100px] h-[30px]" />
                ) : (
                    <Link to="/" className="font-bold text-2xl">
                        {nickname.name}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-pink-600">
                            {nickname.colored}
                        </span>
                    </Link>
                )}
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
                        {!navLinks || navLinksLoading ? (
                            <Separator className="w-[200px] h-[24px]" />
                        ) : (
                            <>
                                {links.map((link) => (
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
                            </>
                        )}
                        <li>
                            <EditNavLinks updateLinks={setLinks} />
                        </li>
                    </ul>
                </nav>
            </div>
            <Separator className="text-gray-400" />
        </header>
    );
}
