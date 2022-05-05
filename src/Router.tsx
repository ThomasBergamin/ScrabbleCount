import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Games from './pages/Games';
import Home from './pages/Home';
import Stats from './pages/Stats';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/games" element={<Games />}></Route>
        <Route path="/stats" element={<Stats />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
