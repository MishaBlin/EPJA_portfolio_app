import { ExternalLinkIcon, FileCodeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import React from 'react';
import { Card, CardContent, CardHeader } from '../../ui/card';
import { Badge } from '../../ui/badge';

const projects = [
    {
        title: 'Telegram Desktop',
        description: 'Description for project one.',
        link: 'https://github.com/telegramdesktop/tdesktop',
        techStack: ['React', 'TypeScript', 'TailwindCSS'],
        image: 'https://a.d-cd.net/d49a3du-960.jpg', // Add image path
    },
    {
        title: 'VS Code',
        description: 'Description for project two.',
        link: 'https://github.com/microsoft/vscode',
        techStack: ['Node.js', 'Express', 'MongoDB'],
        image: 'https://i.pinimg.com/originals/ff/34/30/ff343064cb1e726b1fdd31d701d46360.jpg', // Add image path
    },
    // Add more projects as needed
];

export default function Projects() {
    return (
        <div className="mt-20" id="projects">
            <h1 className="text-4xl font-bold mb-4">Projects</h1>
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
                        <Link to="/project/1">
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
