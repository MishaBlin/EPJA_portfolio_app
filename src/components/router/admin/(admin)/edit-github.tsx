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

export default function EditGitHub() {
    const [open, setOpen] = React.useState(false);

    const { data: githubRepo, isLoading: isGithubRepoLoading } = useGetApi(
        'github-repo',
        fetcher,
    );

    const [author, setAuthor] = React.useState('');
    const [repo, setRepo] = React.useState('');

    useEffect(() => {
        if (githubRepo) {
            setAuthor(githubRepo.author);
            setRepo(githubRepo.repo);
        }
    }, [githubRepo]);

    const {
        postData,
        error: postError,
        isMutating,
    } = usePostApi('/api/cats/admin/edit/github-repo');

    const handleSubmit = async () => {
        const updatedGithub = { github: { repo, author } };

        try {
            await postData(updatedGithub);

            if (!postError) {
                setOpen(false);
            } else {
                console.error('Failed to update github:', postError);
            }
        } catch (error) {
            console.error('Error updating github:', error);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
                <Button disabled={!githubRepo || isGithubRepoLoading}>
                    Edit
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit GitHub</DialogTitle>
                    <DialogDescription className="pt-4 flex flex-col gap-y-3">
                        <div className="flex flex-col gap-y-1.5">
                            <Label>Author</Label>
                            <Input
                                value={author}
                                onChange={(e) =>
                                    setAuthor(e.currentTarget.value)
                                }
                            />
                        </div>
                        <div className="flex flex-col gap-y-1.5">
                            <Label>Repo</Label>
                            <Input
                                value={repo}
                                onChange={(e) => setRepo(e.currentTarget.value)}
                            />
                        </div>
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
