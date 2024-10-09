import { Card, CardContent, CardFooter, CardHeader } from '../../../ui/card';
import { LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import React from 'react';
import { useGetApi } from '../../../../lib/api/useApi';
import { fetcher } from '../../../../lib/api/root';
import { Skeleton } from '../../../ui/skeleton';

export default function Connect({ editButton = null }) {
    const { data: links, isLoading: linksLoading } = useGetApi(
        'links',
        fetcher,
    );

    if (!links || linksLoading) {
        return <Skeleton className="h-1/2 w-full" />;
    }

    return (
        <Card className="rounded-md">
            <CardHeader className="text-foreground">
                <div className="flex gap-x-3 items-center justify-between">
                    <div className="flex gap-x-3 items-center">
                        <LinkIcon size={20} /> Connect with me
                    </div>
                </div>
            </CardHeader>
            <CardContent className="text-muted-foreground">
                <ul className="flex flex-col gap-y-1.5">
                    {links.map((link) => (
                        <li
                            key={link.title}
                            className="flex gap-x-3 items-center"
                        >
                            <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                            <Link to={link.href} target="_blank">
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </CardContent>
            {editButton ? <CardFooter>{editButton}</CardFooter> : null}
        </Card>
    );
}
