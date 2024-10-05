import React from 'react';
import { useParams } from 'react-router-dom';
import { GitHubReadme } from 'react-github-readme-md';

const projects = [
    {
        id: '0',
        title: 'Project One',
        description: 'Description for project one.',
        link: 'https://github.com/telegramdesktop/tdesktop',
        techStack: ['React', 'TypeScript', 'TailwindCSS'],
        image: '/assets/Image.jpg',
    },
    {
        id: '1',
        title: 'Project Two',
        description: 'Description for project two.',
        link: 'https://github.com/microsoft/vscode',
        techStack: ['Node.js', 'Express', 'MongoDB'],
        image: 'path/to/project-two-image.jpg',
    },
];

export default function ProjectDetail() {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);

    const splitLink = (link: string) => {
        const path = new URL(link).pathname;
        const components = path.split('/');
        return components;
    };

    const linkComponents = splitLink(project.link);
    const username = linkComponents[1];
    const repoName = linkComponents[2];

    return (
        <div>
            <GitHubReadme
                className="dark"
                username={username}
                repo={repoName}
            />
        </div>
    );
}
