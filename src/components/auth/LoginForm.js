import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  Link,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { appName } from "../../constant/defaultValues";
import * as Yup from "yup";
import { Form, FormikProvider, useFormik } from "formik";

const RootStyle = styled(Stack)((theme) => ({
  minHeight: "100vh",
}));

function LoginForm() {
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
    rememberPassword: Yup.bool(),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberPassword: true,
      showPassword: false,
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { getFieldProps, errors, touched, values, setFieldValue } = formik;
  return (
    <RootStyle mx="auto" justifyContent={"center"} maxWidth={480}>
      <Typography variant="h4" mb={2}>
        Login to {appName}
      </Typography>
      <Typography color="text.secondary" mb={3} variant="p">
        Enter your details below.
      </Typography>
      <FormikProvider value={formik}>
        <Form>
          <Stack spacing={3}>
            <TextField
              label="Email address"
              {...getFieldProps("email")}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
            />
            <TextField
              label="Password"
              type={values.showPassword ? "text" : "password"}
              {...getFieldProps("password")}
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password}
              InputProps={{
                endAdornment: (
                  <IconButton
                    onClick={() =>
                      setFieldValue("showPassword", !values.showPassword)
                    }
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                ),
              }}
            />
            <Stack
              direction="row"
              alignItems={"center"}
              justifyContent="space-between"
            >
              <FormControlLabel
                control={
                  <Checkbox
                    {...getFieldProps("rememberPassword")}
                    defaultChecked
                  />
                }
                label="Remember me"
              />
              <Link underline="hover">Forgot password</Link>
            </Stack>
            <Button type="submit" size="large" variant="contained">
              Login
            </Button>
          </Stack>
        </Form>
      </FormikProvider>
      <Typography mt={3} textAlign={"center"}>
        Don’t have an account? <Link underline="hover">Get started</Link>
      </Typography>
    </RootStyle>
  );
}

export default LoginForm;
