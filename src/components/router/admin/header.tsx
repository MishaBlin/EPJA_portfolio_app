import { Link } from 'react-router-dom';
import React from 'react';
import { useGetApi } from '../../../lib/api/useApi';
import { fetcher } from '../../../lib/api/root';
import { Skeleton } from '../../ui/skeleton';
import { Separator } from '../../ui/separator';

export default function AdminHeader() {
    const { data: nickname, isLoading: isNicknameLoading } = useGetApi(
        'nickname',
        fetcher,
    );

    return (
        <header className="sticky top-0 bg-background z-50">
            <div className="py-4 flex justify-start items-center">
                {!nickname || isNicknameLoading ? (
                    <Skeleton className="w-[100px] h-[30px]" />
                ) : (
                    <Link to="/" className="font-bold text-2xl">
                        {nickname.name}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-pink-600">
                            {nickname.colored}
                        </span>
                    </Link>
                )}
            </div>
            <Separator className="text-gray-400" />
        </header>
    );
}
