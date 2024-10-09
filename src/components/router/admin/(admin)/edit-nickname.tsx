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

export default function EditNickname({ updateNickname }) {
    const [open, setOpen] = React.useState(false);

    const { data: user, isLoading: isUserLoading } = useGetApi(
        'nickname',
        fetcher,
    );

    const [name, setName] = React.useState('');
    const [colored, setColored] = React.useState('');

    useEffect(() => {
        if (user) {
            setName(user.name);
            setColored(user.colored);
        }
    }, [user]);

    const {
        postData,
        error: postError,
        isMutating,
    } = usePostApi('/api/cats/admin/edit/nickname');

    const handleSubmit = async () => {
        const updatedName = { name, colored };

        try {
            await postData(updatedName);

            if (!postError) {
                updateNickname(updatedName);
                setOpen(false);
            } else {
                console.error('Failed to update nickname:', postError);
            }
        } catch (error) {
            console.error('Error updating nickname:', error);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
                <Button disabled={!user || isUserLoading}>Edit</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Nickname</DialogTitle>
                    <DialogDescription className="pt-4 flex flex-col gap-y-3">
                        <div className="flex flex-col gap-y-1.5">
                            <Label>Name</Label>
                            <Input
                                value={name}
                                onChange={(e) => setName(e.currentTarget.value)}
                            />
                        </div>
                        <div className="flex flex-col gap-y-1.5">
                            <Label>Colored</Label>
                            <Input
                                value={colored}
                                onChange={(e) =>
                                    setColored(e.currentTarget.value)
                                }
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
