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


export const getSingleRoom = createAsyncThunk('room/getSingleRoom', async (roomId, thunkAPI) => {
  try {
    const res = await fetch(`https://book-a-room.onrender.com/api/v1/rooms/${roomId}`);
    const data = await res.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }

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

export const deleteRoom = createAsyncThunk('room/deleteRoom', async (roomId, thunkAPI) => {
  try {
    const response = await fetch(`${URL}/${roomId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    // body: JSON.stringify(roomId),
    });
    const data = await response.json();

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// deleteRoom is dispached this way => dispatch(deleteRoom({id}))

const roomSlice = createSlice({
  name: 'room',
  initialState: {
    rooms: [],
    singleRoom: {},
    myRooms: [],
    loading: false,
    error: null,
  },
  reducers: {
    signOut: (state) => ({ ...state, rooms: [] }),
  },

  extraReducers: {
    [fetchRooms.pending]: (state) => ({ ...state, loading: true }),
    [fetchRooms.fulfilled]: (state, action) => {
      const myRooms = action.payload.filter((room) => room.user_id === 1);
      return ({
        ...state,
        rooms: action.payload,
        myRooms,
        loading: false,
      });
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
      const filteredRooms = state.rooms.filter((room) => room.id !== action.payload);
      return { ...state, rooms: filteredRooms, loading: false };
    },
    [deleteRoom.rejected]: (state, action) => ({ ...state, error: action.payload, loading: false }),

  },
});

export const { signOut } = roomSlice.actions;

export default roomSlice.reducer;
