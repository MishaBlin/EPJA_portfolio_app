import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '../components/ui/button';

test('Button render', () => {
    render(<Button>Кнопка</Button>);
    expect(screen.getByText(/Кнопка/i)).toBeInTheDocument();
});
