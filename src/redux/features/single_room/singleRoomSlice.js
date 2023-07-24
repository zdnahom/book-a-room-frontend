import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getSingleRoom = createAsyncThunk('singleRoom/getSingleRoom', async (roomId, thunkAPI) => {
  try {
    const res = await fetch(`https://book-a-room.onrender.com/api/v1/rooms/${roomId}`);
    const data = await res.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const initialState = {
  singleRoom: {},
  isLoading: false,
  error: null,
};

const singleRoomSlice = createSlice({
  name: 'singleRoom',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getSingleRoom.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(getSingleRoom.fulfilled, (state, action) => ({
        ...state,
        singleRoom: action.payload,
        isLoading: false,
      }))
      .addCase(getSingleRoom.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }));
  },
});

export default singleRoomSlice.reducer;
