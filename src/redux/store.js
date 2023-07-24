import { configureStore } from '@reduxjs/toolkit';
import user from './reducers/user';
import reservation from './reducers/reservation';

const store = configureStore({
  reducer: {
    user,
    reservation,
  },
});

export default store;
