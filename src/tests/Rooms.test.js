// MyRooms.test.js (Test)
import React from 'react';
import { render, screen } from '@testing-library/react';
import MyRooms from '../components/MyRooms'; // Update the path accordingly
import '@testing-library/jest-dom/extend-expect';

describe('MyRooms component', () => {
  it('should render the room details correctly', () => {
    render(<MyRooms />);

    // Assert that the table headers are rendered correctly
    expect(screen.getByText('Room')).toBeInTheDocument();
    expect(screen.getByText('Date Start')).toBeInTheDocument();
    expect(screen.getByText('Date End')).toBeInTheDocument();
    expect(screen.getByText('Cost')).toBeInTheDocument();
    expect(screen.getByText('Unbook')).toBeInTheDocument();

    // Assert that the reservation details are rendered correctly
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2021-10-01')).toBeInTheDocument();
    expect(screen.getByText('2021-10-04')).toBeInTheDocument();
    expect(screen.getByText('300')).toBeInTheDocument();

    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('2021-10-01')).toBeInTheDocument();
    expect(screen.getByText('2021-10-04')).toBeInTheDocument();
    expect(screen.getByText('300')).toBeInTheDocument();
  });
});
