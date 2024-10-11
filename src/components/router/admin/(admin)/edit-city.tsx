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

export default function EditCity({ updateLocation }) {
    const [open, setOpen] = React.useState(false);

    const { data: city, isLoading: isCityLoading } = useGetApi('city', fetcher);

    const [name, setName] = React.useState('');
    const [href, setHref] = React.useState('');

    const {
        postData,
        error: postError,
        isMutating,
    } = usePostApi('/api/cats/admin/edit/city');

    useEffect(() => {
        if (city) {
            setName(city.name);
            setHref(city.href);
        }
    }, [city]);

    const handleSubmit = async () => {
        const updatedCity = { name, href };

        try {
            await postData({ city: updatedCity });

            if (!postError) {
                updateLocation(updatedCity);
                setOpen(false);
            } else {
                console.error('Failed to update city:', postError);
            }
        } catch (error) {
            console.error('Error updating city:', error);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
                <Button disabled={!city || isCityLoading}>Edit</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit City</DialogTitle>
                    <DialogDescription className="pt-4 flex flex-col gap-y-3">
                        <div className="flex flex-col gap-y-1.5">
                            <Label>Name</Label>
                            <Input
                                value={name}
                                onChange={(e) => setName(e.currentTarget.value)}
                            />
                        </div>
                        <div className="flex flex-col gap-y-1.5">
                            <Label>Link</Label>
                            <Input
                                value={href}
                                onChange={(e) => setHref(e.currentTarget.value)}
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
