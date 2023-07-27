import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SideBar from '../components/SideBar';

test('renders navigation links', () => {
  render(
    <MemoryRouter>
      <SideBar />
    </MemoryRouter>,
  );

  const roomsLinks = screen.queryAllByText(/Rooms/i);

  // Assert that there is at least one link with "Rooms" text
  expect(roomsLinks.length).toBeGreaterThan(0);
});
