import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

test('Link render', () => {
    render(
        <MemoryRouter>
            <Link to="https://innopolis.university/" target="_blank">
                Innopolis University
            </Link>
        </MemoryRouter>,
    );
    expect(screen.getByText(/Innopolis University/i)).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute(
        'href',
        'https://innopolis.university/',
    );
});

test('Link render with target', () => {
    render(
        <MemoryRouter>
            <Link to="https://innopolis.university/" target="_blank">
                Innopolis University
            </Link>
        </MemoryRouter>,
    );
    expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');
});
