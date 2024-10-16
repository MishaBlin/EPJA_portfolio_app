import { Card, CardContent, CardFooter, CardHeader } from '../../../ui/card';
import { FileCodeIcon } from 'lucide-react';
import { Badge } from '../../../ui/badge';
import React, { useEffect } from 'react';
import { fetcher } from '../../../../lib/api/root';
import { useGetApi } from '../../../../lib/api/useApi';
import { Skeleton } from '../../../ui/skeleton';
import EditTechStack from '../../admin/(admin)/edit-tech-stack';

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

export default function TechStack({ editButton = null }) {
    const { data: techStack, isLoading: isTechStackLoading } = useGetApi(
        'tech-stack',
        fetcher,
    );

    const [stack, setStack] = React.useState<string[]>([]);

    useEffect(() => {
        if (techStack) {
            setStack(techStack);
        }
    }, [techStack]);

    if (!techStack || isTechStackLoading) {
        return <Skeleton className="w-full flex-1" />;
    }

    return (
        <Card className="rounded-md flex-1">
            <CardHeader className="text-foreground">
                <div className="flex gap-x-3 items-center">
                    <FileCodeIcon size={20} /> Tech stack
                </div>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
                {stack.map((item) => (
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
            {editButton ? (
                <CardFooter>
                    {' '}
                    <EditTechStack updateTechStack={setStack} />{' '}
                </CardFooter>
            ) : null}
        </Card>
    );
}
