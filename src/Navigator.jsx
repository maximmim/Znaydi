import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Startup from './pages/Startup';

export default function Navigator() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/startup" element={<Startup />} />
      </Routes>
    </BrowserRouter>
  );
}