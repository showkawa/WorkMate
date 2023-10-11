import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Panel from './layout/panel/Panel';

export default function App() {
  return (
    <>
      <CssBaseline />
      <HashRouter>
        <Routes>
          <Route path="*" element={<Panel />} />
        </Routes>
      </HashRouter>
    </>
  );
}
