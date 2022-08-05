import React, { useState } from "react";
import {
  Stack,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import {
  GroupsSharp,
  Home,
  LayersSharp,
  LocalOffer,
  ModeNight,
  PeopleAlt,
  Security,
  Settings,
  Store,
  Visibility,
} from "@mui/icons-material";
function Sidebar() {
    const [menudata, setMenudata] = useState([{name:"Home",icon:<Home />}])
    // const [tabValue, setTabValue] = useState(1)

  return (
    <Box
      // bgcolor="skyblue"
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box sx={{ position: "fixed" }}>
        <List>
         {menudata?.map(x=>(

          <ListItem>
            <ListItemButton sx={{ borderRadius: "30px" }}>
              <ListItemIcon>
                {x.icon} 
              </ListItemIcon>
              <ListItemText primary={x.name} />
            </ListItemButton>
          </ListItem>))}
          <ListItem>
            <ListItemButton  sx={{ borderRadius: "30px" }}>
              <ListItemIcon>
                <LayersSharp />
              </ListItemIcon>
              <ListItemText primary="New Submission" />
            </ListItemButton>
          </ListItem>
          {/* <ListItem>
            <ListItemButton sx={{ borderRadius: "30px" }}>
              <ListItemIcon>
                <Store />
              </ListItemIcon>
              <ListItemText primary="Market Place" />
            </ListItemButton>
          </ListItem> */}
          {/* <ListItem>
            <ListItemButton sx={{ borderRadius: "30px" }}>
              <ListItemIcon>
                <LocalOffer />
              </ListItemIcon>
              <ListItemText primary="Offers Online" />
            </ListItemButton>
          </ListItem> */}
          <ListItem>
            <ListItemButton sx={{ borderRadius: "30px" }}>
              <ListItemIcon>
                <PeopleAlt />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton sx={{ borderRadius: "30px" }}>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton sx={{ borderRadius: "30px" }}>
              <ListItemIcon>
                <Visibility />
              </ListItemIcon>
              <ListItemText primary="Most Viewed" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              component="a"
              href="#"
              sx={{ borderRadius: "30px" }}
            >
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Sidebar;
