import React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

export default function Notion() {
  const ele = window.electron;
  const handleOpen = () => {
    ele.ipcRenderer.sendMessage('create-new-window', 'https://www.notion.so/');
  };
  
  return (
    <Box className="notion">
      <Button onClick={handleOpen}>Notion</Button>
    </Box>
  );
}
