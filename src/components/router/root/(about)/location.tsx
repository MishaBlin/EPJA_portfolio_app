import { Card, CardContent, CardHeader } from '../../../ui/card';
import { PinIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import React from 'react';
import { useGetApi } from '../../../../lib/api/useApi';
import { fetcher } from '../../../../lib/api/root';
import { Skeleton } from '../../../ui/skeleton';

export default function Location() {
    const { data: city, isLoading: isCityLoading } = useGetApi('city', fetcher);

    if (!city || isCityLoading) {
        return <Skeleton className="w-1/2" />;
    }

    return (
        <Card className="w-1/2 rounded-md">
            <CardHeader className="">
                <div className="flex gap-x-3 items-center">
                    <PinIcon size={20} /> Location
                </div>
            </CardHeader>
            <CardContent className="text-muted-foreground">
                <Link to={city.href} target="_blank">
                    {city.name}
                </Link>
            </CardContent>
        </Card>
    );
}
