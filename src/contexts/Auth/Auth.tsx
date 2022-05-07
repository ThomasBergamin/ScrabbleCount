import axios from 'axios';
import { createContext, ReactNode, useState } from 'react';

export interface IAuth {
  token: string;
  refreshToken: string;
  userId: string;
}

interface IAuthContext {
  currentUser: IAuth;
  login: (email: string, password: string) => Promise<any>;
  logout: () => void;
  register: (
    lastName: string,
    firstName: string,
    email: string,
    password: string,
  ) => Promise<any>;
  authHeader: () => {
    Authorization: string;
  };
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [currentUser, setCurrentUser] = useState<IAuth>(
    localStorage.getItem('authTokens')
      ? JSON.parse(localStorage.getItem('authTokens') || '')
      : {
          token: '',
          refreshToken: '',
          userId: '',
        },
  );

  const API_URL = 'http://localhost:3001/api/auth/';

  const instance = axios.create({ baseURL: API_URL });

  const login = async (email: string, password: string) => {
    return await instance
      .post('/login', {
        email,
        password,
      })
      .then((response) => {
        console.log('Success with auth');
        if (response.data.token && response.data.refreshToken) {
          setCurrentUser({ ...response.data });
          localStorage.setItem(
            'authTokens',
            JSON.stringify({
              ...response.data,
            }),
          );
          instance.defaults.headers.common[
            'Authorization'
          ] = `Bearer ${response.data.token}`;
          return response;
        }
      })
      .catch((error) => {
        throw error.response;
      });
  };

  const logout = () => {
    localStorage.removeItem('authTokens');
    setCurrentUser({
      token: '',
      refreshToken: '',
      userId: '',
    });
  };

  const register = async (
    lastName: string,
    firstName: string,
    email: string,
    password: string,
  ) => {
    return await axios
      .post(API_URL + 'signup', {
        lastName,
        firstName,
        email,
        password,
      })
      .then((response) => response)
      .catch((error) => {
        throw error.response;
      });
  };

  const authHeader = () => {
    if (currentUser.token) {
      return { Authorization: 'Bearer ' + currentUser.token };
    } else {
      return { Authorization: 'no token' };
    }
  };

  return (
    <AuthContext.Provider
      value={{ currentUser, login, logout, register, authHeader }}
    >
      {children}
    </AuthContext.Provider>
  );
};
