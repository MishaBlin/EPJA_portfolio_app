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
import EditGitHub from '../../admin/(admin)/edit-github';

export default function Stars({ editButton = null }) {
    const [stars, setStars] = useState(0);
    const [github, setGithub] = React.useState<{
        author: string;
        repo: string;
    }>({ author: '', repo: '' });

    const { data: githubRepo, isLoading: isGithubRepoLoading } = useGetApi(
        'github-repo',
        fetcher,
    );

    useEffect(() => {
        if (github) {
            fetchGithubStars(github).then((stars) => setStars(stars));
        }
    }, [github]);

    useEffect(() => {
        if (githubRepo) {
            setGithub(githubRepo);
        }
    }, [githubRepo]);

    if (!githubRepo || isGithubRepoLoading) {
        return <Skeleton className="flex-1 w-full" />;
    }

    return (
        <Card className="rounded-md group h-full flex flex-col">
            <Link
                to={`https://github.com/${github.author}/${github.repo}`}
                target="_blank"
                className="flex-1"
            >
                <CardHeader>
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
            <CardContent className="text-2xl font-bold text-foreground flex flex-col gap-y-1.5 flex-1">
                {stars} {numberStars(stars)}
            </CardContent>

            {editButton ? (
                <CardFooter className="mt-auto">
                    <EditGitHub updateGithub={setGithub} />
                </CardFooter>
            ) : null}
        </Card>
    );
}
