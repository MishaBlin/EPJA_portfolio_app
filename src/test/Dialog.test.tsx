import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '../components/ui/dialog';
import userEvent from '@testing-library/user-event';

test('Dialog render', () => {
    render(
        <Dialog>
            <DialogTrigger>Open Dialog</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>,
    );
    expect(screen.getByText(/Open Dialog/i)).toBeInTheDocument();

    userEvent.click(screen.getByText('Open Dialog')).then(() => {
        expect(
            screen.getByText(/Are you absolutely sure?/i),
        ).toBeInTheDocument();
        expect(
            screen.getByText(
                /This action cannot be undone. This will permanently delete your account and remove your datafrom our servers./i,
            ),
        ).toBeInTheDocument();
    });
});
