import { Card, CardContent, CardHeader, CardFooter } from '../../../ui/card';
import { PinIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useGetApi } from '../../../../lib/api/useApi';
import { fetcher } from '../../../../lib/api/root';
import { Skeleton } from '../../../ui/skeleton';
import EditCity from '../../admin/(admin)/edit-city';

export default function Location({ editButton = null }) {
    const { data: city, isLoading: isCityLoading } = useGetApi('city', fetcher);

    const [location, setLocation] = React.useState<{
        name: string;
        href: string;
    }>({ name: '', href: '' });

    useEffect(() => {
        if (city) {
            setLocation(city);
        }
    }, [city]);

    if (!city || isCityLoading) {
        return <Skeleton className="w-1/2" />;
    }

    return (
        <Card className="w-1/2 rounded-md flex-col justify-center">
            <CardHeader className="">
                <div className="flex gap-x-3 items-center">
                    <PinIcon size={20} /> Location
                </div>
            </CardHeader>
            <CardContent className="text-muted-foreground">
                <Link to={location.href} target="_blank">
                    {location.name}
                </Link>
            </CardContent>
            {editButton ? (
                <CardFooter>
                    <EditCity updateLocation={setLocation} />
                </CardFooter>
            ) : null}
        </Card>
    );
}
