import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import userReducer from './user/user';

const api = createAPI();

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    },
  }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
