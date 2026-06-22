// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DecenNode title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DecenNode/i);
    expect(titleElement).toBeInTheDocument();
});
