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
import { useGetApi } from '../../../../lib/api/useApi';
import { fetcher } from '../../../../lib/api/root';

export default function EditNavLinks() {
    const [open, setOpen] = React.useState(false);

    const { data: nickname, isLoading: isNicknameLoading } = useGetApi(
        'nickname',
        fetcher,
    );

    const [defaultPart, setDefaultPart] = React.useState('');
    const [coloredPart, setColoredPart] = React.useState('');

    useEffect(() => {
        if (nickname) {
            setDefaultPart(nickname.name);
            setColoredPart(nickname.colored);
        }
    }, [nickname]);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
                <Button disabled={!nickname || isNicknameLoading}>Edit</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Nav Links</DialogTitle>
                    <DialogDescription className="pt-4 flex flex-col gap-y-3">
                        <div className="flex flex-col gap-y-1.5">
                            <Label>Default part</Label>
                            <Input
                                value={defaultPart}
                                onChange={(e) =>
                                    setDefaultPart(e.currentTarget.value)
                                }
                            />
                        </div>
                        <div className="flex flex-col gap-y-1.5">
                            <Label>Colored part</Label>
                            <Input
                                value={coloredPart}
                                onChange={(e) =>
                                    setColoredPart(e.currentTarget.value)
                                }
                            />
                        </div>
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogTrigger asChild>
                        <Button>Submit</Button>
                    </DialogTrigger>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
