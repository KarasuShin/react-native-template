import axios from 'axios';
import appConfig from '@/config/app';

const { server } = appConfig;

const request = axios.create({
  baseURL: `${server.ssl ? 'https' : 'http'}://${server.host}:${server.port}/`,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

request.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  },
);

export default request;
