import { ExternalLinkIcon, FileCodeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader } from '../../../ui/card';
import { Badge } from '../../../ui/badge';
import { fetcher } from '../../../../lib/api/root';
import { useGetApi } from '../../../../lib/api/useApi';
import { Skeleton } from '../../../ui/skeleton';
import EditProjects from '../../admin/(admin)/edit-projects';
import { Project } from '../../../../lib/types';

export default function Projects({ editButton = null }) {
    const { data: projectsFetch, isLoading: isProjectsLoading } = useGetApi(
        'projects',
        fetcher,
    );

    const [projects, setProjects] = React.useState<Project[]>([]);

    useEffect(() => {
        if (projectsFetch) {
            setProjects(projectsFetch);
        }
    }, [projectsFetch]);

    if (!projectsFetch || isProjectsLoading) {
        return <Skeleton className="w-full flex-1" />;
    }

    return (
        <div className="mt-20" id="projects">
            <div className="flex gap-10 items-center py-5">
                <h1 className="text-4xl font-bold">Projects</h1>
                {editButton ? (
                    <EditProjects updateProjects={setProjects} />
                ) : null}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <Card key={project.title} className="rounded-md">
                        <CardHeader className="text-foreground">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-x-3 items-center">
                                    <FileCodeIcon size={20} /> {project.title}
                                </div>
                                <Link to={project.link} target="_blank">
                                    <ExternalLinkIcon size={20} />
                                </Link>
                            </div>
                        </CardHeader>
                        <Link to={'/project/' + project.id}>
                            <CardContent className="text-muted-foreground">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-32 object-cover rounded-md mb-2"
                                />
                                <p>{project.description}</p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {project.techStack.map((tech) => (
                                        <Badge
                                            key={tech}
                                            className="bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Link>
                    </Card>
                ))}
            </div>
        </div>
    );
}
