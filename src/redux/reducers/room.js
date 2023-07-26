import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://book-a-room.onrender.com/api/v1/rooms';

export const fetchRooms = createAsyncThunk('room/fetchRooms', async (payload, thunkAPI) => {
  const response = await fetch(URL);
  const data = await response.json();
  if (response.ok) {
    return data;
  }
  return thunkAPI.rejectWithValue(data);
});

// featchRooms is dispachec this way => dispatch(featchRooms())

export const createRoom = createAsyncThunk('room/createRoom', async (payload, thunkAPI) => {
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  if (response.ok) {
    return data;
  }
  return thunkAPI.rejectWithValue(data);
});

// createRoom is dispached this way =>
// dispatch(createRoom({description, num, room_type, nigth_cost, image, user_id}))

export const deleteRoom = createAsyncThunk('room/deleteRoom', async (payload, thunkAPI) => {
  const response = await fetch(`${URL}/${payload}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  if (response.ok) {
    return { id: payload };
  }
  return thunkAPI.rejectWithValue(data);
});

// deleteRoom is dispached this way => dispatch(deleteRoom({id}))

const roomSlice = createSlice({
  name: 'room',
  initialState: {
    rooms: [],
    loading: false,
    error: null,
  },
  reducers: {
    signOut: (state) => ({ ...state, rooms: [] }),
  },

  extraReducers: {
    [fetchRooms.pending]: (state) => ({ ...state, loading: true }),
    [fetchRooms.fulfilled]: (state, action) => {
      const rooms = action.payload;
      return { ...state, rooms, loading: false };
    },
    [fetchRooms.rejected]: (state, action) => ({
      ...state,
      error: action.payload,
      loading: false,
    }),
    [createRoom.pending]: (state) => ({ ...state, loading: true }),
    [createRoom.fulfilled]: (state, action) => ({
      ...state,
      rooms: [...state.rooms, action.payload],
      loading: false,
    }),
    [createRoom.rejected]: (state, action) => ({ ...state, error: action.payload, loading: false }),
    [deleteRoom.pending]: (state) => ({ ...state, loading: true }),
    [deleteRoom.fulfilled]: (state, action) => {
      state.rooms = state.rooms.filter((room) => room.id !== action.id);
    },
    [deleteRoom.rejected]: (state, action) => ({ ...state, error: action.payload, loading: false }),
  },
});

export const { signOut } = roomSlice.actions;

export default roomSlice.reducer;
