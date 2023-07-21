import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://book-a-room.onrender.com/users';

export const signIn = createAsyncThunk('user/signIn', async (payload, thunkAPI) => {
  const response = await fetch(`${URL}/sign_in`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: payload }),
  });
  const data = await response.json();
  if (response.ok) {
    return data;
  }
  return thunkAPI.rejectWithValue(data);
});

// signIn is dispachec this way => dispatch(signIn({email, password}))

export const signUp = createAsyncThunk('user/signUp', async (payload, thunkAPI) => {
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: payload }),
  });
  const data = await response.json();
  if (response.ok) {
    return data;
  }
  return thunkAPI.rejectWithValue(data);
});

// signUp is dispachec this way => dispatch(signUp({email, password, password_confirmation}))

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    error: null,
    loading: false,
  },
  reducers: {
    signOut: (state) => {
      state.user = null;
    },
  },
  extraReducers: {
    [signIn.pending]: (state) => {
      state.loading = true;
    },
    [signIn.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    [signIn.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    [signUp.pending]: (state) => {
      state.loading = true;
    },
    [signUp.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    [signUp.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { signOut } = userSlice.actions;
export default userSlice.reducer;
