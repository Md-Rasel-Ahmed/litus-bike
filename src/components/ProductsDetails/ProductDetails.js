import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import YouTube from "../Skleton";
import { Skeleton } from "@mui/material";
const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const [skeleton, setSkleton] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    fetch("https://aqueous-harbor-59183.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => {
        const findProduct = data.find((product) => product._id == id);
        setProduct(findProduct);
      });
  }, [id, product]);
  setTimeout(() => {
    setSkleton(false);
  }, 3000);
  // update product
  const handleUpdate = (id) => {
    if (product.quantity > 0) {
      let updateQ = product.quantity - 1;
      let updateQuantity = { quantity: updateQ };
      fetch(`https://aqueous-harbor-59183.herokuapp.com/product/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateQuantity),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  };
  // Handle reStock alignItems
  const handleStock = (e, id) => {
    e.preventDefault();
    let quantityNumber = parseInt(e.target.number.value);
    if (quantityNumber > 0) {
      let updateQ = product.quantity + quantityNumber;
      let updateQuantity = { quantity: updateQ };
      fetch(`https://aqueous-harbor-59183.herokuapp.com/product/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateQuantity),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1, m: 1, p: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6} md={6} sm={12}>
            {skeleton ? (
              <YouTube />
            ) : (
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
                    <strong>Quantity: {product?.quantity}</strong>
                  </Typography>
                  <Typography>
                    {" "}
                    <strong>Supplier Name: {product?.SupplierName} </strong>
                  </Typography>
                  <Typography>
                    {" "}
                    <strong>Sold</strong>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => handleUpdate(product?._id)}
                    sx={{ flexGrow: 1, m: 1 }}
                    variant="contained"
                  >
                    Delivered
                  </Button>
                </CardActions>
              </Card>
            )}
          </Grid>
          <Grid item xs={12} lg={6} md={6} sm={12}>
            <div align="center">
              {skeleton ? (
                <div>
                  <br />
                  <Skeleton width="150px" height="25px" />
                  <br />
                  <br />
                  <Skeleton width="70px" height="25px" />
                  <Skeleton width="220px" height="4px" textAlign="left" />
                  <Skeleton width="187px" height="60px" />
                </div>
              ) : (
                <>
                  <h3>Re Stock item</h3>
                  <Box
                    onSubmit={(e) => handleStock(e, product?._id)}
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="standard-basic"
                      label="Quantity"
                      type="number"
                      name="number"
                      variant="standard"
                    />
                    <br />
                    <Button
                      type="submit"
                      sx={{ flexGrow: 1, m: 1 }}
                      variant="contained"
                    >
                      Stock
                    </Button>
                  </Box>
                </>
              )}
            </div>
          </Grid>
        </Grid>
      </Box>

      <div align="center">
        {skeleton ? (
          <Skeleton width="187px" height="60px" />
        ) : (
          <Button variant="contained" color="primary">
            <Link
              style={{ textDecoration: "none", color: "#fff" }}
              to="/manageProduct"
            >
              Manage Products
            </Link>
          </Button>
        )}
      </div>
      <br />
    </div>
  );
};

export default ProductDetails;
