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
import { getConfigValue } from '@brojs/cli';

export default function EditSocials({ updateSocials }) {
    const [open, setOpen] = React.useState(false);

    const { data: socLinks, isLoading: socLinksLoading } = useGetApi(
        'links',
        fetcher,
    );

    const [links, setLinks] = React.useState<{ href: string; title: string }[]>(
        [],
    );

    useEffect(() => {
        if (socLinks) {
            setLinks(socLinks);
        }
    }, [socLinks]);

    const {
        postData,
        error: postError,
        isMutating,
    } = usePostApi(`${getConfigValue('cats.backend')}/admin/edit/links`);

    const handleSubmit = async () => {
        const updatedLinks = { links };

        try {
            await postData(updatedLinks);

            if (!postError) {
                setOpen(false);
                updateSocials(links);
            } else {
                console.error('Failed to update social links:', postError);
            }
        } catch (error) {
            console.error('Error updating social links:', error);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
                <Button disabled={!socLinks || socLinksLoading}>Edit</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Social Links</DialogTitle>
                    <DialogDescription className="pt-4 flex flex-col gap-y-3">
                        <ul className="flex flex-col p-2 gap-y-3 h-[50vh] overflow-y-scroll">
                            {links.map((elem, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col gap-y-2 p-4 rounded border-border border"
                                >
                                    <div className="flex flex-col gap-y-1.5">
                                        <Label>Title</Label>
                                        <Input
                                            value={elem.title}
                                            onChange={(e) =>
                                                setLinks([
                                                    ...links.map((el, i) => {
                                                        if (i !== index) {
                                                            return el;
                                                        }
                                                        return {
                                                            title: e.target
                                                                .value,
                                                            href: el.href,
                                                        };
                                                    }),
                                                ])
                                            }
                                        />
                                    </div>

                                    <div className="flex flex-col gap-y-1.5">
                                        <Label>Link</Label>
                                        <Input
                                            value={elem.href}
                                            onChange={(e) =>
                                                setLinks([
                                                    ...links.map((el, i) => {
                                                        if (i !== index) {
                                                            return el;
                                                        }
                                                        return {
                                                            title: el.title,
                                                            href: e.target
                                                                .value,
                                                        };
                                                    }),
                                                ])
                                            }
                                        />
                                    </div>

                                    <Button
                                        className="w-fit"
                                        onClick={() => {
                                            setLinks([
                                                ...links.filter(
                                                    (_, i) => i !== index,
                                                ),
                                            ]);
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
                                        setLinks([
                                            ...links,
                                            { title: '', href: '' },
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
