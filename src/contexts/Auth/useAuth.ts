import { useContext } from 'react';

import { AuthContext } from './Auth';

export const useAuth = () => useContext(AuthContext);
