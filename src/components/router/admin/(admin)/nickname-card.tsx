import { Card, CardContent, CardHeader, CardFooter } from '../../../ui/card';
import { UserRoundPenIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useGetApi } from '../../../../lib/api/useApi';
import { fetcher } from '../../../../lib/api/root';
import { Skeleton } from '../../../ui/skeleton';
import EditNickname from './edit-nickname';

export default function Nickname({ updateHeaderNickname, editButton = null }) {
    const { data: nickname, isLoading: isNicknameLoading } = useGetApi(
        'nickname',
        fetcher,
    );

    const [name, setName] = React.useState<{ name: string; colored: string }>({
        name: '',
        colored: '',
    });

    useEffect(() => {
        if (nickname) {
            setName(nickname);
        }
    }, [nickname]);

    const handleUpdateNickname = (nickname: {
        name: string;
        colored: string;
    }) => {
        setName(nickname);
        updateHeaderNickname(nickname);
    };

    if (!nickname || isNicknameLoading) {
        return <Skeleton className="w-1/2" />;
    }

    return (
        <Card className="w-1/2 rounded-md">
            <CardHeader className="">
                <div className="flex gap-x-3 items-center">
                    <UserRoundPenIcon size={20} /> Nickname
                </div>
            </CardHeader>
            <CardContent className="text-muted-foreground">
                <Link to="#" className="font-bold text-2xl">
                    {name.name}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-pink-600">
                        {name.colored}
                    </span>
                </Link>
            </CardContent>
            {editButton ? (
                <CardFooter>
                    <EditNickname updateNickname={handleUpdateNickname} />
                </CardFooter>
            ) : null}
        </Card>
    );
}
