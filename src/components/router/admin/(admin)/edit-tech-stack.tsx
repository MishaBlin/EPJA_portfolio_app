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
import { useGetApi, usePostApi } from '../../../../lib/api/useApi';
import { fetcher } from '../../../../lib/api/root';
import { Input } from '../../../ui/input';

export default function EditTechStack({ updateTechStack }) {
    const [open, setOpen] = React.useState(false);

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

    const {
        postData,
        error: postError,
        isMutating,
    } = usePostApi('/api/cats/admin/edit/tech-stack');

    const handleSubmit = async () => {
        const updatedStack = { techStack: stack };

        try {
            await postData(updatedStack);

            if (!postError) {
                updateTechStack(stack);
                setOpen(false);
            } else {
                console.error('Failed to update tech stack:', postError);
            }
        } catch (error) {
            console.error('Error updating tech stack:', error);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
                <Button disabled={!techStack || isTechStackLoading}>
                    Edit
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Tech Stack</DialogTitle>
                    <DialogDescription className="pt-4">
                        <ul className="flex flex-col p-2 gap-y-3 h-[50vh] overflow-y-scroll">
                            {stack.map((elem, index) => (
                                <li key={index} className="px-2">
                                    <div className="flex gap-x-1.5">
                                        <Input
                                            value={elem}
                                            onChange={(e) =>
                                                setStack([
                                                    ...stack.map((el, i) => {
                                                        if (i !== index) {
                                                            return el;
                                                        }
                                                        return e.target.value;
                                                    }),
                                                ])
                                            }
                                        />
                                        <Button
                                            onClick={() =>
                                                setStack([
                                                    ...stack.filter(
                                                        (_, i) => i !== index,
                                                    ),
                                                ])
                                            }
                                        >
                                            Delete
                                        </Button>
                                    </div>
                                </li>
                            ))}
                            <li className="px-2">
                                <Button
                                    className="w-full"
                                    onClick={() => setStack([...stack, ''])}
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
