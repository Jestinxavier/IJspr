import { Grid, Box, Typography, Card, Stack, Container } from "@mui/material";
import React from "react";
import avathar from "../../asset/pages/auth/illustration_register 1.svg";
import LoginForm from "../../components/auth/LoginForm";
import { appName } from "../../constant/defaultValues";

function Login() {
  return (
    <Grid container spacing={2}>
      <Grid display={{ xs: "none", md: "block" }} md={5} item>
        <Card sx={{ m: 3 }}>
          <Stack alignItems={"center"}>
            <Typography variant="h2">{appName}</Typography>
            <Typography
              variant="p"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              Enrich your research with primary sources
            </Typography>
            <Box
              component="img"
              sx={{
                height: 500,
                width: 500,
                maxHeight: { xs: 600, md: 600 },
                maxWidth: { xs: 350, md: 250 },
              }}
              alt="The house from the offer."
              src={avathar}
            />
          </Stack>
        </Card>
      </Grid>
      <Grid md={7} xs={12} item>
        <Container maxWidth={"lg"}>
          <LoginForm />
        </Container>
      </Grid>
    </Grid>
  );
}

export default Login;
