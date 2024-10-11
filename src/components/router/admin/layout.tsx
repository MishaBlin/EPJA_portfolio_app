import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import AdminHeader from './admin-header';
import { fetcher } from '../../../lib/api/root';
import { useGetApi } from '../../../lib/api/useApi';

export default function AdminLayout() {
    const navigate = useNavigate();
    const [nickname, setNickname] = useState<{ name: string; colored: string }>(
        { name: '', colored: '' },
    );

    const { data: user } = useGetApi('nickname', fetcher);

    useEffect(() => {
        if (user) {
            setNickname(user);
        }
    }, [user]);

    useEffect(() => {
        const fetchNickname = async () => {
            const response = await fetcher('nickname');
            setNickname(response);
        };
        fetchNickname();

        if (
            !localStorage.getItem('cats_token') ||
            localStorage.getItem('cats_token') === 'undefined'
        ) {
            navigate('/auth');
        }
    }, []);

    return (
        <div className="container max-w-screen-xl flex flex-col text-white h-full">
            <AdminHeader nickname={nickname} />
            <div className="flex-1">
                <Outlet context={{ nickname, setNickname }} />
            </div>
        </div>
    );
}
