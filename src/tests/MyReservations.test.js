import React from 'react';
import { render, screen } from '@testing-library/react';
import MyReservations from '../components/MyReservations';

// Make sure to import the following line for `toBeInTheDocument` matcher
import '@testing-library/jest-dom/extend-expect';

describe('MyReservations component', () => {
  it('should render reservation details correctly', () => {
    render(<MyReservations />);

    // Assert that the table headers are rendered correctly
    expect(screen.getByText('Room')).toBeInTheDocument();
    expect(screen.getByText('Date Start')).toBeInTheDocument();
    expect(screen.getByText('Date End')).toBeInTheDocument();
    expect(screen.getByText('Cost')).toBeInTheDocument();

    // ... (rest of the test)
  });

  // ... (rest of the tests)
});
