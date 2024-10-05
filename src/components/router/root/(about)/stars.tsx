import { Card, CardContent, CardHeader } from '../../../ui/card';
import { ExternalLinkIcon, Star } from 'lucide-react';
import { numberStars } from '../../../../lib/utils';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { fetchGithubStars } from '../../../../lib/api/github';
import { useGetApi } from '../../../../lib/api/useApi';
import { fetcher } from '../../../../lib/api/root';
import { Skeleton } from '../../../ui/skeleton';
import { CardFooter } from '../../../ui/card';

export default function Stars({ editButton = null }) {
    const [stars, setStars] = useState(0);

    const { data: githubRepo, isLoading: isGithubRepoLoading } = useGetApi(
        'github-repo',
        fetcher,
    );

    useEffect(() => {
        if (githubRepo) {
            fetchGithubStars(githubRepo).then((stars) => setStars(stars));
        }
    }, [githubRepo]);

    if (!githubRepo || isGithubRepoLoading) {
        return <Skeleton className="flex-1 w-full" />;
    }

    return (
        <Card className="rounded-md group h-full">
            <Link
                to={`https://github.com/${githubRepo.author}/${githubRepo.repo}`}
                target="_blank"
                className="flex-1"
            >
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
            </Link>
            <CardContent className="text-2xl font-bold text-foreground flex flex-col gap-y-1.5">
                {stars} {numberStars(stars)}
            </CardContent>
            {editButton ? <CardFooter>{editButton}</CardFooter> : null}
        </Card>
    );
}
