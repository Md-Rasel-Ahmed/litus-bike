import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import GoogleIcon from "@mui/icons-material/Google";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

const theme = createTheme();
export default function Login() {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);
  const [email, setEmail] = React.useState("");
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  React.useEffect(() => {
    if (error) {
      toast.error(error.message.slice(22, -2));
    }
    if (user || guser) {
      navigate(from, { replace: true });
      toast.success("Login success!");
    }
  }, [error, user, guser]);

  // user login handler
  const handleSubmit = async (event) => {
    event.preventDefault();
    let pass = event.target.password.value;
    let email = event.target.email.value;
    await signInWithEmailAndPassword(email, pass);
  };
  // google singin
  const singinWithGoogle = () => {
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
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Button
              onClick={singinWithGoogle}
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
            >
              <GoogleIcon /> Sign In with google
            </Button>
            <Grid container>
              <Grid item xs>
                <Link
                  onClick={async () => {
                    await sendPasswordResetEmail(email);
                    resetError
                      ? toast.error(resetError.message.slice(22, -2))
                      : toast.success("Email Sent!");
                  }}
                  variant="body2"
                >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link onClick={() => navigate("/register")} variant="body2">
                  Don't have an account? Sign
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
