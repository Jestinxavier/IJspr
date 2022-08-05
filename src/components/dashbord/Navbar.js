import {
  AppBar,
  styled,
  Badge,
  Box,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  Icon,
  MenuItem, 
  Menu,
} from "@mui/material";
import React, { useState } from "react";
import {
  Search,
  MailIcon,
  MenuIcon,
  Notifications,
  Pets,
  MenuOpen,
 
} from "@mui/icons-material";
import Searchbar from "../dashbord/navbarInnerComponents/Searchbar"
import ImageAvathar from "../dashbord/navbarInnerComponents/ImageAvathar"

const StyledToolbar = styled(Toolbar)({
    display:'flex',
    justifyContent:"space-between",
});
const StyledBox = styled(Box)({
    border: "#b9bfc1 solid 1px",
    background: "azure",
    display: "flex",
    alignItems: "center",
    borderRadius: 30,
    padding: 1,
})
function Navbar() {
    const [OpenMenu, setOpen] = useState(false)
  return (
    <AppBar position="sticky" bgcolor="#eb6709">
       
      <StyledToolbar>
        <Typography>IJ-SPER</Typography>
        <Searchbar />
        <StyledBox onClick={()=>{setOpen(true)}}>
        <ImageAvathar />
        <Typography variant="caption"  color="initial">Jestin Xavier</Typography>
        </StyledBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        sx={{marginTop:10}}
        open={OpenMenu}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
