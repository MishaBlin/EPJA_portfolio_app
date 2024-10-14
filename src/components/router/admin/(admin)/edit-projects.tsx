import React, { useEffect } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '../../../ui/dialog';
import { Button } from '../../../ui/button';
import { Input } from '../../../ui/input';
import { Label } from '../../../ui/label';
import { useGetApi, usePostApi } from '../../../../lib/api/useApi';
import { fetcher } from '../../../../lib/api/root';

const generateIdFromTitle = (title) => {
    return title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .trim();
};

export default function EditProjects({ updateProjects }) {
    const [open, setOpen] = React.useState(false);

    const { data: projectsData, isLoading: projectsLoading } = useGetApi(
        'projects',
        fetcher,
    );

    const [rawProjects, setRawProjects] = React.useState([]);

    useEffect(() => {
        if (projectsData) {
            setRawProjects(
                projectsData.map((project) => ({
                    ...project,
                    techStack: project.techStack.join(', '),
                })),
            );
        }
    }, [projectsData]);

    const {
        postData,
        error: postError,
        isMutating,
    } = usePostApi(`${process.env.BACKEND}/admin/edit/projects`);

    const handleSubmit = async () => {
        const transformedProjects = rawProjects.map((project) => ({
            ...project,
            id: generateIdFromTitle(project.title),
            techStack: project.techStack.split(',').map((tech) => tech.trim()),
        }));

        const updatedProjects = { projects: transformedProjects };

        try {
            await postData(updatedProjects);

            if (!postError) {
                setOpen(false);
                updateProjects(transformedProjects);
            } else {
                console.error('Failed to update projects:', postError);
            }
        } catch (error) {
            console.error('Error updating projects:', error);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
                <Button disabled={!projectsData || projectsLoading}>
                    Edit Projects
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Projects</DialogTitle>
                    <DialogDescription className="pt-4 flex flex-col gap-y-3">
                        <ul className="flex flex-col p-2 gap-y-3 h-[50vh] overflow-y-scroll">
                            {rawProjects.map((project, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col gap-y-2 p-4 rounded border-border border"
                                >
                                    <div className="flex flex-col gap-y-1.5">
                                        <Label>Title</Label>
                                        <Input
                                            value={project.title}
                                            onChange={(e) =>
                                                setRawProjects((prevProjects) =>
                                                    prevProjects.map(
                                                        (proj, i) =>
                                                            i === index
                                                                ? {
                                                                      ...proj,
                                                                      title: e
                                                                          .target
                                                                          .value,
                                                                  }
                                                                : proj,
                                                    ),
                                                )
                                            }
                                        />
                                    </div>

                                    <div className="flex flex-col gap-y-1.5">
                                        <Label>Description</Label>
                                        <Input
                                            value={project.description}
                                            onChange={(e) =>
                                                setRawProjects((prevProjects) =>
                                                    prevProjects.map(
                                                        (proj, i) =>
                                                            i === index
                                                                ? {
                                                                      ...proj,
                                                                      description:
                                                                          e
                                                                              .target
                                                                              .value,
                                                                  }
                                                                : proj,
                                                    ),
                                                )
                                            }
                                        />
                                    </div>

                                    <div className="flex flex-col gap-y-1.5">
                                        <Label>Link</Label>
                                        <Input
                                            value={project.link}
                                            onChange={(e) =>
                                                setRawProjects((prevProjects) =>
                                                    prevProjects.map(
                                                        (proj, i) =>
                                                            i === index
                                                                ? {
                                                                      ...proj,
                                                                      link: e
                                                                          .target
                                                                          .value,
                                                                  }
                                                                : proj,
                                                    ),
                                                )
                                            }
                                        />
                                    </div>

                                    <div className="flex flex-col gap-y-1.5">
                                        <Label>
                                            Tech Stack (comma-separated)
                                        </Label>
                                        <Input
                                            value={project.techStack}
                                            onChange={(e) =>
                                                setRawProjects((prevProjects) =>
                                                    prevProjects.map(
                                                        (proj, i) =>
                                                            i === index
                                                                ? {
                                                                      ...proj,
                                                                      techStack:
                                                                          e
                                                                              .target
                                                                              .value,
                                                                  }
                                                                : proj,
                                                    ),
                                                )
                                            }
                                        />
                                    </div>

                                    <div className="flex flex-col gap-y-1.5">
                                        <Label>Image URL</Label>
                                        <Input
                                            value={project.image}
                                            onChange={(e) =>
                                                setRawProjects((prevProjects) =>
                                                    prevProjects.map(
                                                        (proj, i) =>
                                                            i === index
                                                                ? {
                                                                      ...proj,
                                                                      image: e
                                                                          .target
                                                                          .value,
                                                                  }
                                                                : proj,
                                                    ),
                                                )
                                            }
                                        />
                                    </div>

                                    <Button
                                        className="w-fit"
                                        onClick={() => {
                                            setRawProjects((prevProjects) =>
                                                prevProjects.filter(
                                                    (_, i) => i !== index,
                                                ),
                                            );
                                        }}
                                    >
                                        Delete
                                    </Button>
                                </div>
                            ))}

                            <li className="px-2">
                                <Button
                                    className="w-full"
                                    onClick={() =>
                                        setRawProjects((prevProjects) => [
                                            ...prevProjects,
                                            {
                                                title: '',
                                                description: '',
                                                link: '',
                                                techStack: '',
                                                image: '',
                                            },
                                        ])
                                    }
                                >
                                    Add new
                                </Button>
                            </li>
                        </ul>
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogTrigger asChild>
                        <Button onClick={handleSubmit} disabled={isMutating}>
                            Submit
                        </Button>
                    </DialogTrigger>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
