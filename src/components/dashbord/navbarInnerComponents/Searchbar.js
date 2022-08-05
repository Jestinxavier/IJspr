import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { Typography } from '@mui/material';
import { lightBlue } from '@mui/material/colors';

export default function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', minWidth: 400,borderRadius:"20px" }}
    >
      <InputBase
        sx={{ flex: 1,pl:3 }}
        placeholder="Search Here..."
        inputProps={{ 'aria-label': 'search here...' }}
      />
      <IconButton type="submit" sx={{ p: '2px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <Typography color="Blue">
      IJ-SPER
      </Typography> */}
    </Paper>
  );
}
