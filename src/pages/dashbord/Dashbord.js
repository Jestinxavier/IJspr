import { Box,Stack } from "@mui/material";
import React, { useState,useEffect } from "react";
import Navbar from "../../components/dashbord/Navbar";
import Sidebar from "../../components/dashbord/Sidebar";
import Feed from "../../components/dashbord/Feed";

function Dashbord() {
  const [tabvalue, SetTabvalue] = useState(0) 
  return (
    <Box>
      <Navbar />
      <Stack direction = "row" justifyContent="space-between">
          <Sidebar />
          <Feed />
      </Stack>
    </Box>)
}

export default Dashbord;
