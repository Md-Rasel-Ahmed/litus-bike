import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

export default function AddNewItem() {
  const [user] = useAuthState(auth);
  const handleAddNewItem = (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let email = user.email;
    let price = e.target.price.value;
    let quantity = e.target.quantity.value;
    let img = e.target.imageURL.value;
    let description = e.target.description.value;
    let sepliarName = e.target.sepliarName.value;
    let newProduct = {
      name,
      price,
      email,
      quantity,
      img,
      description,
      sepliarName,
    };

    fetch("http://localhost:5000/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div align="center">
      <h1>Add New Item</h1>
      <Box
        onSubmit={handleAddNewItem}
        component="form"
        sx={{
          "& > :not(style)": { width: "300px", padding: "5px" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          name="name"
          label="Product Name"
          variant="standard"
        />
        <br />
        <TextField
          id="standard-basic"
          label=" Price"
          name="price"
          type="number"
          variant="standard"
        />
        <br />
        <TextField
          id="standard-basic"
          label="Quantity"
          name="quantity"
          type="number"
          variant="standard"
        />
        <br />
        <TextField
          id="standard-basic"
          label="Description"
          name="description"
          type="text"
          variant="standard"
        />
        <br />
        <TextField
          id="standard-basic"
          label="Supliar Name"
          name="sepliarName"
          type="text"
          variant="standard"
        />
        <br />
        <TextField
          id="standard-basic"
          label="Image URL"
          name="imageURL"
          variant="standard"
        />
        <br />
        <Button type="submit" variant="outlined" color="primary">
          Add
        </Button>
      </Box>
    </div>
  );
}
