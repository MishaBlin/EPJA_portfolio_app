import { Card, CardContent, CardFooter, CardHeader } from '../../../ui/card';
import { LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useGetApi } from '../../../../lib/api/useApi';
import { fetcher } from '../../../../lib/api/root';
import { Skeleton } from '../../../ui/skeleton';
import EditSocials from '../../admin/(admin)/edit-socials';

export default function Connect({ editButton = null }) {
    const { data: links, isLoading: linksLoading } = useGetApi(
        'links',
        fetcher,
    );

    const [socials, setSocials] = React.useState<
        { href: string; title: string }[]
    >([]);

    useEffect(() => {
        if (links) {
            setSocials(links);
        }
    }, [links]);

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
                    {socials.map((social) => (
                        <li
                            key={social.title}
                            className="flex gap-x-3 items-center"
                        >
                            <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                            <Link to={social.href} target="_blank">
                                {social.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </CardContent>
            {editButton ? (
                <CardFooter>
                    <EditSocials updateSocials={setSocials} />
                </CardFooter>
            ) : null}
        </Card>
    );
}
