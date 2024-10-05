import { Card, CardContent, CardHeader } from '../../../ui/card';
import { PinIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { city } from '../../../../lib/data';
import React from 'react';

export default function Location() {
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
