import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => {
        const findProduct = data.find((product) => product._id == id);
        setProduct(findProduct);
      });
  }, [id]);

  return (
    <div>
      <Box sx={{ flexGrow: 1, m: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6} md={6} sm={12}>
            <Card sx={{ maxWidth: 345, margin: "auto" }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                image={product.img}
              />

              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                ></Typography>
                <Typography variant="body2" color="text.secondary">
                  {product?.name}
                </Typography>
                <Typography>
                  {" "}
                  <strong>Price:{product?.price} </strong>
                </Typography>
                <Typography>
                  {" "}
                  <strong>Quantity: </strong>
                </Typography>
                <Typography>
                  {" "}
                  <strong>Supliar: </strong>
                </Typography>
              </CardContent>
              <CardActions>
                {/* <Button sx={{ flexGrow: 1, m: 1 }} variant="contained">
                  <ArrowCircleRightIcon />
                  Update
                </Button> */}
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} lg={6} md={6} sm={12}>
            <div align="center" className="homeImg">
              fd
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ProductDetails;
