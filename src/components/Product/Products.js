import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

export default function Products() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);
  return (
    <Box sx={{ flexGrow: 1, m: 1 }}>
      <h1 align="center">OUR PRODUCTS</h1>
      <Grid container spacing={2}>
        {products?.slice(0, 6).map((product) => {
          return (
            <Grid item xs={12} lg={4} md={4} sm={12}>
              <Card sx={{ maxWidth: 345, margin: "auto" }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="200"
                  image={product.img}
                />

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                  <Typography>
                    {" "}
                    <strong>Price: ${product.price}</strong>
                  </Typography>
                  <Typography>
                    {" "}
                    <strong>Quantity: {product.quantity}</strong>
                  </Typography>
                  <Typography>
                    {" "}
                    <strong>Supliar: {product.sepliarName}</strong>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button sx={{ flexGrow: 1, m: 1 }} variant="contained">
                    <ArrowCircleRightIcon />
                    Update
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
