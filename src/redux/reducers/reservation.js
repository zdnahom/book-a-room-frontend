import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://book-a-room.onrender.com/api/v1/reservations';

export const fetchReservations = createAsyncThunk(
  'reservation/fetchReservations',
  async (payload, thunkAPI) => {
    const response = await fetch(`${URL}?user_id=${payload}`);
    const data = await response.json();
    if (response.ok) {
      return data;
    }
    return thunkAPI.rejectWithValue(data);
  },
);

// fetchReservations is dispachec this way => dispatch(fetchReservations(user_id))

export const createReservation = createAsyncThunk(
  'reservation/createReservation',
  async (payload, thunkAPI) => {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ reservation: payload }),
    });
    const data = await response.json();
    if (response.ok) {
      return data;
    }
    return thunkAPI.rejectWithValue(data);
  },
);

// createReservation is dispachec this way =>
// dispatch(createReservation({user_id, room_id, start_date, end_date, nights, cost}))

export const deleteReservation = createAsyncThunk(
  'reservation/deleteReservation',
  async (payload, thunkAPI) => {
    const response = await fetch(`${URL}/${payload}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    if (response.ok) {
      return { id: payload, ...data };
    }
    return thunkAPI.rejectWithValue(data);
  },
);

// deleteReservation is dispachec this way => dispatch(deleteReservation({id}))

const reservationSlice = createSlice({
  name: 'reservation',
  initialState: {
    reservations: [],
    error: null,
    loading: false,
  },
  reducers: {
    signOut: (state) => {
      state.reservations = [];
    },
  },
  extraReducers: {
    [fetchReservations.pending]: (state) => {
      state.loading = true;
    },
    [fetchReservations.fulfilled]: (state, action) => {
      state.reservations = action.payload;
      state.loading = false;
    },
    [fetchReservations.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    [createReservation.pending]: (state) => {
      state.loading = true;
    },
    [createReservation.fulfilled]: (state, action) => {
      state.reservations.push(action.payload);
      state.loading = false;
    },
    [createReservation.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    [deleteReservation.pending]: (state) => {
      state.loading = true;
    },
    [deleteReservation.fulfilled]: (state, action) => {
      state.reservations = state.reservations.filter(
        (reservation) => reservation.id !== action.payload.id,
      );
      state.loading = false;
    },
    [deleteReservation.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { signOut } = reservationSlice.actions;

export default reservationSlice.reducer;
