import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { toast } from 'react-toastify';
import { dropToken, saveToken } from '../../services/token';
import { RootState } from '..';
import { APIRoute, AuthorizationStatus, ErrorMessage } from '../../const';
import { BackUser, User, UserState } from '../../types/user';

const initialState: UserState = {
  user: null,
  authorizationStatus: AuthorizationStatus.NoAuth,
  isLoading: false,
  isError: false,
  isLogoutLoading: false,
  isLogoutError: false,
  isRegistrationLoading: false,
  isRegistrationError: false,
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
      toast.error(ErrorMessage.LoginError);
      throw error;
    }
  },
);

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    state: RootState;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { extra: api }) => {
  try {
    await api.get(APIRoute.Logout);
    dropToken();
  } catch (error) {
    toast.error(ErrorMessage.LogoutError);
    throw error;
  }
});

export const registerAction = createAsyncThunk<
  User,
  User,
  {
    state: RootState;
    extra: AxiosInstance;
  }
>(
  'data/registration',
  async (
    {
      email, password, name,
    }: User,
    { extra: api },
  ) => {
    try {
      const { data } = await api.post<BackUser>(APIRoute.Registration, {
        email,
        password,
        name,
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
      })
      .addCase(loginAction.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(logoutAction.pending, (state) => {
        state.isLogoutLoading = true;
        state.isLogoutError = false;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.isLogoutLoading = false;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = null;
      })
      .addCase(logoutAction.rejected, (state) => {
        state.isLogoutLoading = false;
        state.isLogoutError = true;
      })
      .addCase(registerAction.pending, (state) => {
        state.isRegistrationLoading = true;
        state.isRegistrationError = false;
      })
      .addCase(registerAction.fulfilled, (state, action) => {
        state.isRegistrationLoading = false;
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
      })
      .addCase(registerAction.rejected, (state) => {
        state.isRegistrationLoading = false;
        state.isRegistrationError = true;
      });
  },
});

export default userSlice.reducer;
