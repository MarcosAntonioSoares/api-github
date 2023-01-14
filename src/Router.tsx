import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import { Repositories } from './pages/Repositories';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/repositories" element={<Repositories />} />
    </Routes>
  );
}
