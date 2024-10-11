import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../components/ui/card';

test('Card render', () => {
    render(
        <Card>
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>,
    );
    expect(screen.getByText(/Card Title/i)).toBeInTheDocument();
    expect(screen.getByText(/Card Description/i)).toBeInTheDocument();
    expect(screen.getByText(/Card Content/i)).toBeInTheDocument();
    expect(screen.getByText(/Card Footer/i)).toBeInTheDocument();
});
