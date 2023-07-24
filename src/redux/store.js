import { configureStore } from '@reduxjs/toolkit';
import user from './reducers/user';
import reservation from './reducers/reservation';
import room from './reducers/room';

const store = configureStore({
  reducer: {
    user,
    reservation,
    room,
  },
});

export default store;
