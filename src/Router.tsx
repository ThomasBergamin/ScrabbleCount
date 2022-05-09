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

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();
  const location = useLocation();

  return auth?.isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ path: location.pathname }} />
  );
};

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/register"
          element={
            <RequireAuth>
              <Register />
            </RequireAuth>
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
