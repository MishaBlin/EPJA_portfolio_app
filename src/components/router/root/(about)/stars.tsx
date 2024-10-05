import { githubRepo } from '../../../../lib/data';
import { Card, CardContent, CardHeader } from '../../../ui/card';
import { ExternalLinkIcon, Star } from 'lucide-react';
import { numberStars } from '../../../../lib/utils';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { fetchGithubStars } from '../../../../lib/api/github';

export default function Stars() {
    const [stars, setStars] = useState(0);

    useEffect(() => {
        fetchGithubStars().then((stars) => setStars(stars));
    }, []);

    return (
        <Link
            to={`https://github.com/${githubRepo.author}/${githubRepo.repo}`}
            target="_blank"
            className="flex-1"
        >
            <Card className="rounded-md group h-full">
                <CardHeader className="">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-x-3 items-center">
                            <Star
                                size={20}
                                className="group-hover:text-yellow-400 group-hover:fill-yellow-400 transition-colors"
                            />{' '}
                            Give me a star :3
                        </div>
                        <ExternalLinkIcon size={20} />
                    </div>
                </CardHeader>
                <CardContent className="text-2xl font-bold text-foreground flex flex-col gap-y-1.5">
                    {stars} {numberStars(stars)}
                </CardContent>
            </Card>
        </Link>
    );
}
