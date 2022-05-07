import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ReactLoading from "react-loading";

import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Link, useNavigate } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const url = "https://aqueous-harbor-59183.herokuapp.com/product";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
        setLoading(false);
      });
  }, []);
  const navigate = useNavigate();
  return (
    <>
      {" "}
      <h1
        style={{
          backgroundColor: "#1976D2",
          color: "#fff",
          textAlign: "center",
          padding: "10px 0px",
        }}
      >
        OUR PRODUCTS
      </h1>
      <Box sx={{ flexGrow: 1, m: 1 }}>
        {loading && (
          <ReactLoading
            style={{ margin: "10px auto", height: "100px", width: "50px" }}
            type={"cylon"}
            color={"black"}
            height={100}
            width={50}
          />
        )}
        <Grid container spacing={2}>
          {products?.slice(0, 6).map((product) => {
            return (
              <Grid key={product._id} item xs={12} lg={4} md={6} sm={12}>
                <Card data-aos="fade-up" sx={{ maxWidth: 345, margin: "auto" }}>
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
                      <strong>Supplier Name: {product.SupplierName}</strong>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      onClick={() => navigate(`/productDetails/${product._id}`)}
                      sx={{ flexGrow: 1, m: 1 }}
                      variant="contained"
                    >
                      <ArrowCircleRightIcon />
                      Update
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        <br />
        <div align="center">
          <Link
            style={{ textDecoration: "none", color: "#1976D2" }}
            to="/manageProduct"
          >
            <Button variant="contained"> Manage Products</Button>
          </Link>
        </div>
      </Box>
    </>
  );
}
