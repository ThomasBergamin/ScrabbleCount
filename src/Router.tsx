import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Games from './pages/Games';
import Home from './pages/Home';
import Stats from './pages/Stats';
import Login from './pages/Login';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/games" element={<Games />}></Route>
        <Route path="/stats" element={<Stats />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
