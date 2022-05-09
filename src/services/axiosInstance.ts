import axios from 'axios';
import { IAuth } from '../contexts/Auth/Auth';

const axiosApiInstance = axios.create();

const refreshAccessToken = async () => {
  const localStorageTokens: IAuth | undefined = JSON.parse(
    localStorage.getItem('authTokens') || '',
  );
  const axiosInstance = axios.create({
    headers: {
      Authorization: `Bearer ${localStorageTokens?.refreshToken}`,
    },
  });

  const result = await axiosInstance.post(
    'http://localhost:3001/api/auth/refreshToken',
  );

  return result.data.token;
};

axiosApiInstance.interceptors.request.use(
  (config) => {
    const localStorageTokens: IAuth | undefined = JSON.parse(
      localStorage.getItem('authTokens') || '',
    );
    config.headers = {
      Authorization: `Bearer ${localStorageTokens?.token}`,
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

axiosApiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const access_token = await refreshAccessToken();
      const localStorageTokens: IAuth | undefined = JSON.parse(
        localStorage.getItem('authTokens') || '',
      );
      localStorage.setItem(
        'authTokens',
        JSON.stringify({
          token: access_token,
          refreshToken: localStorageTokens?.refreshToken,
          userId: localStorageTokens?.userId,
        }),
      );
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
      return axiosApiInstance(originalRequest);
    }
    return Promise.reject(error);
  },
);

export default axiosApiInstance;
