import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getRooms = createAsyncThunk('rooms/getRooms', async (_, thunkAPI) => {
  try {
    const res = await fetch('https://book-a-room.onrender.com/api/v1/rooms');
    const data = await res.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
const initialState = {
  rooms: [],
  isLoading: false,
  error: null,
};

const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getRooms.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(getRooms.fulfilled, (state, action) => ({
        ...state,
        rooms: action.payload,
        isLoading: false,
      }))
      .addCase(getRooms.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }));
  },

});

export default roomsSlice.reducer;
