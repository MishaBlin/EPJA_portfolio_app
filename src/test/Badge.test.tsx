import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Badge } from '../components/ui/badge';

test('Badge render', () => {
    render(<Badge>Badge</Badge>);
    expect(screen.getByText(/Badge/i)).toBeInTheDocument();
});
