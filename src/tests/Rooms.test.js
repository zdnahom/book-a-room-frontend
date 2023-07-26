// Import the required modules
import configureStore from 'redux-mock-store';
import roomReducer, { fetchRooms } from '../redux/reducers/room';

describe('roomReducer', () => {
  it('should return the initial state', () => {
    // Call the reducer with undefined state and an empty action
    const initialState = undefined;
    const action = {};
    const newState = roomReducer(initialState, action);

    // Assert that the reducer returns the initial state
    expect(newState).toEqual({
      rooms: [],
      loading: false,
      error: null,
    });
  });

  // Add more test cases for other actions if needed
});
