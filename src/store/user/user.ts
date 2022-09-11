import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { toast } from 'react-toastify';
import { saveToken } from '../../services/token';
import { RootState } from '..';
import { APIRoute, AuthorizationStatus, ErrorMessage } from '../../const';

interface User {
  name?: string;
  email: string;
  password: string;
}

interface BackUser {
  user: User;
  accessToken: string;
}

interface UserState {
  user: User | null;
  authorizationStatus: AuthorizationStatus;
  isLoading: boolean;
  isError: boolean;
}

const initialState: UserState = {
  user: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  isLoading: false,
  isError: false,
};

export const loginAction = createAsyncThunk<
  User,
  User,
  {
    state: RootState;
    extra: AxiosInstance;
  }
>(
  'data/authorization',
  async (
    {
      email, password,
    }: User,
    { extra: api },
  ) => {
    try {
      const { data } = await api.post<BackUser>(APIRoute.Authorization, {
        email,
        password,
      });

      const { accessToken } = data;
      saveToken(accessToken);

      return data.user;
    } catch (error) {
      toast.error(ErrorMessage.NewContactError);
      throw error;
    }
  },
);

export const registerAction = createAsyncThunk<
  User,
  User,
  {
    state: RootState;
    extra: AxiosInstance;
  }
>(
  'data/authorization',
  async (
    {
      email, password, name,
    }: User,
    { extra: api },
  ) => {
    try {
      const { data } = await api.post<User>(APIRoute.Registration, {
        email,
        password,
        name,
      });

      return data;
    } catch (error) {
      toast.error(ErrorMessage.NewContactError);
      throw error;
    }
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
      });
  },
});

export default userSlice.reducer;
