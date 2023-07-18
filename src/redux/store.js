import { configureStore } from '@reduxjs/toolkit';
import roomsSlice from './features/rooms/roomsSlice';

const store = configureStore({
  reducer: {
    rooms: roomsSlice,
  },
});

export default store;
