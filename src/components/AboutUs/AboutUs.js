import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function AboutUs() {
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
        ABOUT US
      </h1>
      <Box sx={{ flexGrow: 1, padding: "30px" }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6} lg={6}>
            <img
              width="100%"
              height=""
              src="https://litusautomobiles.com/wp-content/uploads/2022/02/DSC08292-1170x782.jpg"
              alt=""
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <div>
              <p>
                {" "}
                Litus Automobiles came into existence on 2nd July 2014. Our
                mantra is to provide the best quality full solutions for your
                need to purchase a brand new motorcycle. We offer a wide range
                of brands combined with the most incredible installment plans
                and affordable cash prices. Our team is committed to fulfill
                customer needs in a way no other company has done in the past.
                From purchase of motorcycles to servicing and availability of
                spares, we offer the best service in this industry. So let your
                concerns be ours and be a Litus Automobiles customer to enjoy
                the best motorcycle dealership service in the Maldives.
              </p>
              <p>
                We have the best initial plan for the customers in the Maldives.
                We give our utmost concern about the challenges customers face
                to obtain a brand new motorcycle. Our installment plans are
                designed best to fulfill the customer demands and minimize the
                obstacles in the way to own a motorcycle. All of our installment
                plans are created in compliance with the islamic financing of
                “Ijara Thumma Naglul Milkiyyah. This is a financing scheme which
                is free of interest.
              </p>
              <Button>Learn More...</Button>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
