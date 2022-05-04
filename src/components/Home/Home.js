import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import bannerImg from "../../img/ColorChart_PCX_Red_Black.png";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Home() {
  let theme = createTheme();

  theme = responsiveFontSizes(theme);
  return (
    <div
      style={{
        backgroundColor: "#942224",
        color: "#fff",
        height: "600px",
        display: "flex",
        alignItems: "center ",
      }}
    >
      <Box sx={{ flexGrow: 1, m: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6} md={6} sm={12}>
            <div className="homeTexty">
              <ThemeProvider theme={theme}>
                <Typography variant="h2">WERE THE RIDE MEETS TTHE </Typography>
                <Typography variant="h2">ADVENTURES</Typography>
              </ThemeProvider>
            </div>
          </Grid>
          <Grid item xs={12} lg={6} md={6} sm={12}>
            <div align="center" className="homeImg">
              <img src={bannerImg} alt="" />
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
