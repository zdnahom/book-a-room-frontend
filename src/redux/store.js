import { configureStore } from '@reduxjs/toolkit';
import roomsSlice from './features/rooms/roomsSlice';
import singleRoomSlice from './features/single_room/singleRoomSlice';

const store = configureStore({
  reducer: {
    rooms: roomsSlice,
    singleRoom: singleRoomSlice,
  },
});

export default store;
