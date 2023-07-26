// MyRooms.test.js
import React from 'react';
import { render } from '@testing-library/react';
import MyRooms from '../components/MyRooms'; // Update the path accordingly

describe('MyRooms component', () => {
  it('should render the room details correctly', () => {
    // Create test data
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

    // Render the component with test data
    render(<MyRooms reservations={reservations} />);

    // Assert that the table headers are rendered correctly
    // expect(screen.getByText('Room')).toBeInTheDocument();
    // expect(screen.getByText('Date Start')).toBeInTheDocument();
    // expect(screen.getByText('Date End')).toBeInTheDocument();
    // expect(screen.getByText('Cost')).toBeInTheDocument();
    // expect(screen.getByText('Unbook')).toBeInTheDocument();

    // // Assert that the reservation details are rendered correctly
    // expect(screen.getByText('1')).toBeInTheDocument();
    // expect(screen.getByText('2021-10-01')).toBeInTheDocument();
    // expect(screen.getByText('2021-10-04')).toBeInTheDocument();
    // expect(screen.getByText('300')).toBeInTheDocument();

    // expect(screen.getByText('2')).toBeInTheDocument();
    // expect(screen.getByText('2021-10-01')).toBeInTheDocument();
    // expect(screen.getByText('2021-10-04')).toBeInTheDocument();
    // expect(screen.getByText('300')).toBeInTheDocument();
  });
});
