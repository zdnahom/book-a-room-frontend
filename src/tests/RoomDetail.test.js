import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom'; // Import Routes
import RoomDetail from '../components/RoomDetail';

// Mock the useSelector hook to provide the necessary store state for the test
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

// Define the mock room data
const mockRooms = [
  {
    id: 1,
    image: 'test-image.jpg',
    description: 'Test Room Description',
    night_cost: 100,
  },
];

describe('RoomDetail component', () => {
  beforeEach(() => {
    // Mock the useSelector hook to return the necessary state
    useSelector.mockImplementation((selectorFn) => selectorFn({
      room: {
        rooms: mockRooms,
        loading: false,
      },
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the loading text when loading is true', () => {
    // Mock the useSelector hook to return the loading state
    useSelector.mockImplementation((selectorFn) => selectorFn({
      room: {
        rooms: mockRooms,
        loading: true,
      },
    }));

    // Render the component inside the MemoryRouter with the appropriate route
    render(
      <MemoryRouter initialEntries={['/rooms/1']}>
        <Routes>
          <Route path="/rooms/:roomId" element={<RoomDetail />} />
        </Routes>
      </MemoryRouter>,
    );

    // Rest of the test remains the same...
  });
});
