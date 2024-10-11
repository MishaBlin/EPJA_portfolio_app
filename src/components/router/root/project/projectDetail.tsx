import React from 'react';
import { useParams } from 'react-router-dom';
import { GitHubReadme } from 'react-github-readme-md';
import { fetcher } from '../../../../lib/api/root';
import { useGetApi } from '../../../../lib/api/useApi';
import { Skeleton } from '../../../ui/skeleton';

export default function ProjectDetail() {
    const { id } = useParams();

    const { data: project, isLoading: isProjectLoading } = useGetApi(
        `projects/${id}`,
        fetcher,
    );

    if (!project || isProjectLoading) {
        return <Skeleton className="w-full flex-1" />;
    }

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
