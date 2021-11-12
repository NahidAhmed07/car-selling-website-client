import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  Container,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  LinearProgress,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import loginImg from "../../../images/register.jpg";
import useAuth from "../../../hook/useAuth";
import Navigation from "../../shared/Navigation/Navigation";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const {
    isLoading,
    authError,
    googleSignIn,
    setAuthError,
    setIsLoading,
    registerWithEmail,
  } = useAuth();
  const location = useLocation();
  const history = useHistory();

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...loginData };
    newData[field] = value;
    setLoginData(newData);
  };

  const handleSubmit = (e) => {
    setIsLoading(true);
    const { email, password, displayName, password2 } = loginData;
    if (password === password2) {
      registerWithEmail(email, password, displayName, location, history);
    } else {
      setAuthError("password and Confirm password not matched");
      setIsLoading(false);
    }
    e.preventDefault();
  };

  const handleGoogleLogin = () => {
    googleSignIn(location, history);
  };

  return (
    <>
      <Navigation></Navigation>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box sx={{ mt: 12 }}>
              <h1> Please Register</h1>
              {isLoading && (
                <Box sx={{ width: "75%", mx: "auto" }}>
                  <LinearProgress />
                </Box>
              )}
              <p style={{ color: "red" }}>{authError}</p>
              <form onSubmit={handleSubmit}>
                <TextField
                  id="standard-password-input"
                  label="Your Name"
                  name="displayName"
                  type="text"
                  required
                  onBlur={handleOnBlur}
                  variant="standard"
                  sx={{ width: "75%", m: 1 }}
                />
                <TextField
                  id="standard-password-input"
                  label="Email"
                  name="email"
                  type="email"
                  required
                  onBlur={handleOnBlur}
                  variant="standard"
                  sx={{ width: "75%", m: 1 }}
                />
                <FormControl sx={{ m: 1, width: "75%" }} variant="standard">
                  <InputLabel htmlFor="standard-adornment-password">
                    Password
                  </InputLabel>
                  <Input
                    id="standard-adornment-password"
                    type={showPassword ? "text" : "password"}
                    onBlur={handleOnBlur}
                    name="password"
                    required
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword(!showPassword)}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <br />
                {/* confirm passsword  */}
                <FormControl sx={{ m: 1, width: "75%" }} variant="standard">
                  <InputLabel htmlFor="standard-adornment-password">
                    Confirm Password
                  </InputLabel>
                  <Input
                    id="standard-adornment-password"
                    type={showPassword2 ? "text" : "password"}
                    onBlur={handleOnBlur}
                    name="password2"
                    required
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword2(!showPassword2)}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword2 ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <br />
                <Button
                  sx={{ width: "75%", mt: 3 }}
                  type="submit"
                  variant="contained"
                >
                  Register
                </Button>
                <br />
                <br />
                <NavLink to="/Login" style={{ textDecoration: "none" }}>
                  <Button variant="text">
                    Already Register ? Please Login
                  </Button>
                </NavLink>
                <Button
                  variant="contained"
                  sx={{ width: "75%" }}
                  onClick={handleGoogleLogin}
                >
                  SignIn with google
                </Button>
              </form>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ mt: 10 }}>
              <img style={{ width: "100%" }} src={loginImg} alt="" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Register;
