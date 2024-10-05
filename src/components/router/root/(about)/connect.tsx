import { Card, CardContent, CardHeader } from '../../../ui/card';
import { LinkIcon } from 'lucide-react';
import { links } from '../../../../lib/data';
import { Link } from 'react-router-dom';
import React from 'react';

export default function Connect() {
    return (
        <Card className="rounded-md">
            <CardHeader className="text-foreground">
                <div className="flex gap-x-3 items-center">
                    <LinkIcon size={20} /> Connect with me
                </div>
            </CardHeader>
            <CardContent className="text-muted-foreground flex flex-col gap-y-1.5">
                {links.map((link) => (
                    <div key={link.title} className="flex gap-x-3 items-center">
                        {link.icon}
                        <Link to={link.href} target="_blank">
                            {link.title}
                        </Link>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}
