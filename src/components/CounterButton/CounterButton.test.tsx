import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CounterButton from './CounterButton';

describe('<CounterButton />', () => {
  test('it should mount', () => {
    render(<CounterButton initialValue={0} />);
    
    const counterButton = screen.getByTestId('CounterButton');

    expect(counterButton).toBeInTheDocument();
  });
});