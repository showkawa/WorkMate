import React from 'react';
import { Route, Routes, Outlet, useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import Header from '../header/Header';
import Notion from './notion/Notion';
import Github from './github/Github';
import Wechat from './wechat/Wechat';
import Copilot from './copilot/Copilot';
import Sidebar from '../sidebar/Sidebar';

export default function Panel() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <Header theme={theme} open={[open, setOpen]} />
      <Sidebar open={[open, setOpen]} navigate={useNavigate()} />
      <Routes>
        <Route path="/notion" element={<Notion />} />
        <Route path="/github" element={<Github />} />
        <Route path="/wechat" element={<Wechat />} />
        <Route path="/copilot" element={<Copilot />} />
      </Routes>
      <Outlet />
    </Box>
  );
}
