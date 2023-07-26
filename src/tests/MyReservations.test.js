import React from 'react';
import { render, screen } from '@testing-library/react';
import MyReservations from '../components/MyReservations';

// Make sure to import the following line for `toBeInTheDocument` matcher
import '@testing-library/jest-dom/extend-expect';

describe('MyReservations component', () => {
  const reservations = [
    {
      id: 1,
      room_id: 1,
      start_date: '2021-10-01',
      end_date: '2021-10-04',
      nights: 3,
      cost: 300,
    },
    {
      id: 2,
      room_id: 2,
      start_date: '2021-10-01',
      end_date: '2021-10-04',
      nights: 3,
      cost: 300,
    },
  ];

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
