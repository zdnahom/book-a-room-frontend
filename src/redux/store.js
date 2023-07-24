import { configureStore } from '@reduxjs/toolkit';
import rooms from './reducers/room';

const store = configureStore({
  reducer: {
    rooms,
  },
});

export default store;
