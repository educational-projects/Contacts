import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
    name: string;
    email: string;
    password: string;
}

interface UserState {
    user: User | null;
    isLoading: boolean;
    isError: boolean;
}

const initialState: UserState = {
  user: null,
  isLoading: false,
  isError: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loadUserRequest(state) {
      state.isLoading = true;
    },
    loadUserSuccess(state, action: PayloadAction<User>) {
      state.isLoading = false;
      state.user = action.payload;
    },
    loadUserError(state) {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { loadUserRequest, loadUserSuccess, loadUserError } = userSlice.actions;

export default userSlice.reducer;
