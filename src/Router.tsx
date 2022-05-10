import {
  Route,
  Routes,
  BrowserRouter,
  Navigate,
  useLocation,
} from 'react-router-dom';
import Games from './pages/Games';
import Home from './pages/Home';
import Stats from './pages/Stats';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/404';
import GameDetails from './pages/GameDetails';
import { useAuth } from './contexts/Auth/useAuth';
import { Center, Spinner } from '@chakra-ui/react';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();
  const location = useLocation();

  if (auth?.isLoading) {
    return (
      <Center>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="teal.500"
          size="xl"
        />
      </Center>
    );
  }

  return auth?.isAuthenticated && !auth.isLoading ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ path: location.pathname }} />
  );
};

const CheckIfAuthenticated = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();

  if (auth?.isLoading) {
    return (
      <Center>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="teal.500"
          size="xl"
        />
      </Center>
    );
  }

  return auth?.isAuthenticated ? <Navigate to="/" replace /> : children;
};

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/login"
          element={
            <CheckIfAuthenticated>
              <Login />
            </CheckIfAuthenticated>
          }
        ></Route>
        <Route
          path="/register"
          element={
            <CheckIfAuthenticated>
              <Register />
            </CheckIfAuthenticated>
          }
        ></Route>
        <Route
          path="/games"
          element={
            <RequireAuth>
              <Games />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/games/:id"
          element={
            <RequireAuth>
              <GameDetails />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/stats"
          element={
            <RequireAuth>
              <Stats />
            </RequireAuth>
          }
        ></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
