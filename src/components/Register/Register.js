import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import GoogleIcon from "@mui/icons-material/Google";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
const theme = createTheme();

export default function Register() {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [sendEmailVerification] = useSendEmailVerification(auth);

  const [passError, setPassError] = React.useState("");
  const [termsAccept, setTermsAccept] = React.useState(true);
  const navigate = useNavigate();
  let from = window.location.state?.from?.pathname || "/";

  React.useEffect(() => {
    if (error) {
      toast.error(error.message.slice(22, -2));
    }
    if (guser || user) {
      navigate(from, { replace: true });
      toast.success("Register successfully");
    }
  }, [error, guser, user]);

  // Create a user
  const handleSubmit = async (event) => {
    event.preventDefault();
    let email = event.target.email.value;
    let pass = event.target.password.value;
    let confirmPass = event.target.confrimPassword.value;
    if (pass === confirmPass) {
      await createUserWithEmailAndPassword(email, pass);
      await sendEmailVerification();
      setPassError("");
    } else {
      setPassError("Confirm password dosen,t match!");
    }
  };
  // Create a user from google singups
  const googleSingup = () => {
    signInWithGoogle();
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <p style={{ color: "red" }}>{passError}</p>
                <TextField
                  required
                  fullWidth
                  name="confrimPassword"
                  label="Confirm Password"
                  type="password"
                  id="confrimPassword"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  onChange={(e) => setTermsAccept(!termsAccept)}
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="Accept Terms And Condition."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              disabled={termsAccept}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Button
              onClick={googleSingup}
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
            >
              <GoogleIcon /> Google singup
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/login")}
                >
                  Already have an account? Sign in
                </a>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
