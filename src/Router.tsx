import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Games from './pages/Games';
import Home from './pages/Home';
import Stats from './pages/Stats';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/404';
import GameDetails from './pages/GameDetails';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/games" element={<Games />}></Route>
        <Route path="/games/:id" element={<GameDetails />}></Route>
        <Route path="/stats" element={<Stats />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
