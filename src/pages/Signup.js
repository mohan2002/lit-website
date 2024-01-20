import React from "react";
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
} from "@mui/material";
import Logo from "../common/assets/logo.png";
import { useAuth } from "../common/context/AuthContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { signin, userId, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      signin(values.email, values.password);

      if (userId && isAuthenticated) {
        navigate("/");
      }
    },
  });

  return (
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
          Sign Up
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <FormControl fullWidth margin="normal">
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              InputLabelProps={{
                style: { color: "lightgray" },
              }}
              InputProps={{
                style: {
                  color: "lightgray",
                  borderColor: "lightgray",
                  webkitboxshadow: "0 0 0 1000px white inset",
                },
              }}
              autoComplete="off"
              sx={{
                "& fieldset": { borderColor: "lightgray" },
                "&.custom-autofill-style": {
                  "&:-webkit-autofill": {
                    WebkitBoxShadow: "0 0 0 1000px white inset",
                  },
                },
              }}
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
              error={formik.touched.password && Boolean(formik.errors.password)}
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
          <FormControl fullWidth margin="normal">
            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              fullWidth
              id="confirmPassword"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.confirmPassword)
              }
              helperText={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
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
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ marginTop: 4 }}
          >
            Sign Up
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
            <Typography color="lightgray">Already have an account?</Typography>
            <Link href="/login" color="primary">
              <Typography color="lightgray">Login</Typography>
            </Link>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default Signup;
