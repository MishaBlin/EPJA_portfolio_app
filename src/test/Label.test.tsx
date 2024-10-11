import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Label } from '../components/ui/label';

test('Label render', () => {
    render(<Label>Label</Label>);
    expect(screen.getByText(/Label/i)).toBeInTheDocument();
});
