import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Button } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function WhatWeDo() {
  return (
    <div>
      <h1
        style={{
          backgroundColor: "#1976D2",
          color: "#fff",
          textAlign: "center",
          padding: "10px 0px",
        }}
      >
        CONTACT US
      </h1>
      <Box
        sx={{
          flexGrow: 1,
          padding: "30px",
        }}
      >
        <Grid
          container
          spacing={5}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Grid item xs={12} md={6} lg={6}>
            <div align="center">
              <h1 align="center">Get in touch</h1>
              <h3>
                WANT TO GET IN TOUCH? WE'D LOVE TO HEAR FROM YOU. HERE'S HOW YOU
                CAN REACH US...
              </h3>
              <h1>+960 7797442</h1>
            </div>
            <div
              style={{ display: "flex", gap: "5px", justifyContent: "center" }}
            >
              <Button variant="contained">
                <WhatsAppIcon />
              </Button>
              <Button variant="contained">
                <InstagramIcon />
              </Button>
              <Button variant="contained">
                <TwitterIcon />
              </Button>
              <Button variant="contained">
                <TelegramIcon />
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <img
              width="80%"
              height="100%"
              src="https://litusautomobiles.com/wp-content/uploads/2022/02/zMZAsset-1.png"
              alt=""
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
