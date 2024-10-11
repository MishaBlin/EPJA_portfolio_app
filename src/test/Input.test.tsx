import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Input } from '../components/ui/input';
import userEvent from '@testing-library/user-event';

const InputTest = () => {
    const [value, setValue] = React.useState('Input');
    return <Input value={value} onChange={(e) => setValue(e.target.value)} />;
};

test('Input render', async () => {
    render(<InputTest />);
    expect(screen.getByDisplayValue(/Input/i)).toBeInTheDocument();

    await userEvent.click(screen.getByDisplayValue('Input'));
    await userEvent.keyboard('2');
    expect(screen.getByDisplayValue(/Input2/i)).toBeInTheDocument();
});
