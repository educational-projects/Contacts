import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { getToken } from './token';

const BASE_URL = 'http://localhost:3001';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = getToken();
    const newConfig = { ...config };

    if (token && newConfig.headers) {
      newConfig.headers['x-token'] = token;
    }

    return newConfig;
  });

  return api;
};
