import {
    ExternalLinkIcon,
    FileCodeIcon,
    LinkIcon,
    PinIcon,
    Star,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { fetchGithubStars } from '../../../lib/api/github';
import { Card, CardContent, CardHeader } from '../../ui/card';
import { city, githubRepo, links, techStack } from '../../../lib/data';
import { numberStars } from '../../../lib/utils';
import { Badge } from '../../ui/badge';

const colors = [
    'bg-red-400',
    'bg-blue-400',
    'bg-green-400',
    'bg-yellow-400',
    'bg-indigo-400',
    'bg-purple-400',
    'bg-pink-400',
    'bg-orange-400',
    'bg-cyan-400',
    'bg-rose-400',
    'bg-fuchsia-400',
    'bg-violet-400',
    'bg-emerald-400',
    'bg-teal-400',
];

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

export default function About() {
    const [stars, setStars] = useState(0);

    useEffect(() => {
        fetchGithubStars().then((stars) => setStars(stars));
    }, []);

    return (
        <div>
            <h1 className="text-4xl font-bold mb-4">About me</h1>
            <div className="w-full flex gap-x-4 items-stretch">
                {/*Левый блок*/}
                <div className="w-1/2 flex flex-col gap-y-4">
                    {/*Связь со мной*/}
                    <Card className="rounded-md">
                        <CardHeader className="text-foreground">
                            <div className="flex gap-x-3 items-center">
                                <LinkIcon size={20} /> Connect with me
                            </div>
                        </CardHeader>
                        <CardContent className="text-muted-foreground flex flex-col gap-y-1.5">
                            {links.map((link) => (
                                <div
                                    key={link.title}
                                    className="flex gap-x-3 items-center"
                                >
                                    {link.icon}
                                    <Link to={link.href}>{link.title}</Link>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    {/*Звёзды*/}
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
                </div>

                {/*Правый блок*/}
                <div className="w-1/2 flex flex-col gap-y-4">
                    <div className="flex gap-x-4">
                        {/*Доступен*/}
                        <Card className="w-1/2 rounded-md">
                            <CardContent className="text-muted-foreground pt-6 h-full flex flex-col gap-y-2 justify-center items-center">
                                <div className="flex justify-center">
                                    <span className="relative flex h-4 w-4">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex h-4 w-4 rounded-full bg-green-400"></span>
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold leading-none tracking-tight text-center">
                                    Available for work!
                                </h3>
                            </CardContent>
                        </Card>

                        {/*Локация*/}
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
                    </div>

                    {/*Стек*/}
                    <Card className="rounded-md flex-1">
                        <CardHeader className="text-foreground">
                            <div className="flex gap-x-3 items-center">
                                <FileCodeIcon size={20} /> Tech stack
                            </div>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                            {techStack.map((item) => (
                                <Badge
                                    key={item}
                                    className="bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                                >
                                    <div
                                        className={`${getRandomColor()} w-2 h-2 mr-2 rounded-full`}
                                    />
                                    {item}
                                </Badge>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
