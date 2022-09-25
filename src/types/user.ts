import { AuthorizationStatus } from '../const';

export interface User {
  name?: string;
  email: string;
  password: string;
}

export interface BackUser {
  user: User;
  accessToken: string;
}

export interface UserState {
  user: User | null;
  authorizationStatus: AuthorizationStatus;
  isLoading: boolean;
  isError: boolean;
  isLogoutLoading: boolean;
  isLogoutError: boolean;
  isRegistrationLoading: boolean;
  isRegistrationError: boolean;
}
