import { Box, Typography, Divider, TextField, Grid,styled } from "@mui/material";
import React from "react";
const StyledToolbar = styled(TextField)({
    borderRadius: "30px",
});
function feed() {
  return (
    <Box bgcolor="#fdfdfd" flex={4} p={2}>
      <Typography variant="h5" color="initial">
        Identity
      </Typography>
      <Divider sx={{ m: 0.5 }} orientation="horizontal" />
      <Grid container spacing={2} sx={{marginTop:3}}>
        <Grid display={{ xs: "none", md: "block" }} md={5} item>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="p" color="initial">
            First Name
            </Typography>
            <TextField label="fullWidth" id="fullWidth" />
          </Box>
        </Grid>
        <Grid display={{ xs: "none", md: "block" }} md={5} item>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="p" color="initial">
            Last Name
            </Typography>
            <TextField label="fullWidth" id="fullWidth" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default feed;
