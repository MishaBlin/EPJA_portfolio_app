import { Link } from 'react-router-dom';
import React from 'react';
import { Separator } from '../../ui/separator';
import { useGetApi } from '../../../lib/api/useApi';
import { fetcher } from '../../../lib/api/root';
import { Skeleton } from '../../ui/skeleton';

export default function Footer() {
    const { data: nickname, isLoading: isNicknameLoading } = useGetApi(
        'nickname',
        fetcher,
    );

    return (
        <footer className="mt-6">
            <Separator className="text-gray-400" />
            <div className="py-4 flex justify-between items-center">
                {!nickname || isNicknameLoading ? (
                    <Skeleton className="w-[100px] h-[30px]" />
                ) : (
                    <Link to="/" className="text-2xl">
                        {nickname.name}
                        {nickname.colored}
                    </Link>
                )}
            </div>
        </footer>
    );
}
