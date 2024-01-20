import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  FormControl,
  Typography,
  Container,
  Link,
  Box,
  Alert,
} from "@mui/material";
import Logo from "../common/assets/logo.png";
import { useAuth } from "../common/context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login, userId, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      mail: "",
      password: "",
    },
    validationSchema: Yup.object({
      mail: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      console.log(values);
      try {
        await login(values.mail, values.password);
        // if (userId && isAuthenticated) {
        // }
      } catch (err) {
        console.log(err);
      }
    },
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  return (
    <>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Box sx={{ marginBottom: "100px" }}>
          <img
            src={Logo}
            alt="Logo"
            style={{ height: "100px", marginBottom: "2px" }}
          />
          <Typography
            component="h1"
            variant="h4"
            fontWeight={600}
            marginBottom={2}
            color="lightgray"
          >
            Login
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <FormControl fullWidth margin="normal">
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                id="mail"
                name="mail"
                value={formik.values.mail}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.mail && Boolean(formik.errors.mail)}
                helperText={formik.touched.mail && formik.errors.mail}
                InputLabelProps={{
                  style: { color: "lightgray" },
                }}
                InputProps={{
                  style: { color: "lightgray", borderColor: "lightgray" },
                }}
                sx={{
                  "& fieldset": {
                    borderColor: "lightgray",
                    backgroundColor: "transparent",
                  },
                }}
                autoComplete="off"
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                InputLabelProps={{
                  style: { color: "lightgray" },
                }}
                InputProps={{
                  style: { color: "lightgray", borderColor: "lightgray" },
                }}
                sx={{ "& fieldset": { borderColor: "lightgray" } }}
                autoComplete="off"
              />
            </FormControl>
            <Box mt={2}>
              <Link href="#" color="primary" sx={{ color: "lightgray" }}>
                <Typography>Forgot Password?</Typography>
              </Link>
            </Box>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ marginTop: 4 }}
            >
              Login
            </Button>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 2,
                gap: 1,
              }}
            >
              <Typography color="lightgray">Don't have an account?</Typography>
              <Link href="/signup" color="primary">
                <Typography color="lightgray">Signup</Typography>
              </Link>
            </Box>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default Login;
