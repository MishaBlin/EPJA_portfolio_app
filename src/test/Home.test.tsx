import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Home from '../components/router/root/(home)/home';

test('Home component renders correctly', () => {
    const mockLinks = [{ href: '#contact' }];

    render(
        <MemoryRouter>
            <Home links={mockLinks} />
        </MemoryRouter>,
    );

    // Check if the "Available for work" link is rendered
    expect(screen.getByText(/Available for work/i)).toBeInTheDocument();

    // Check if the heading is rendered correctly
    expect(screen.getByText(/Hello! I’m/i)).toBeInTheDocument();
    expect(screen.getByText(/FullStack/i)).toBeInTheDocument();
    expect(
        screen.getByText(/developer, creating modern web-apps./i),
    ).toBeInTheDocument();
});

test('Home component renders span when links are not provided', () => {
    render(
        <MemoryRouter>
            <Home />
        </MemoryRouter>,
    );

    // Check if the "Available for work" span is rendered
    expect(screen.getByText(/Available for work/i)).toBeInTheDocument();
    expect(
        screen.queryByRole('link', { name: /Available for work/i }),
    ).not.toBeInTheDocument();

    // Check if the heading is rendered correctly
    expect(screen.getByText(/Hello! I’m/i)).toBeInTheDocument();
    expect(screen.getByText(/FullStack/i)).toBeInTheDocument();
    expect(
        screen.getByText(/developer, creating modern web-apps./i),
    ).toBeInTheDocument();
});
