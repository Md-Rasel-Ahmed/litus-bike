import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

export default function AddNewItem() {
  const [user] = useAuthState(auth);

  const handleAddNewItem = async (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let email = user.email;
    let price = e.target.price.value;
    let quantity = parseInt(e.target.quantity.value);
    let img = e.target.imageURL.value;
    let description = e.target.description.value;
    let SupplierName = e.target.SupplierName.value;
    let newProduct = {
      name,
      price,
      email,
      quantity,
      img,
      description,
      SupplierName,
    };
    if (name && price && description && img && SupplierName && quantity) {
      let url = `https://aqueous-harbor-59183.herokuapp.com/useritem`;
      let url1 = `https://aqueous-harbor-59183.herokuapp.com/product`;
      await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newProduct),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Item added successfully done");
          e.target.reset();
        });
      await fetch(url1, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newProduct),
      })
        .then((res) => res.json())
        .then((data) => {
          // toast.success("Item added successfully done");
          // e.target.reset();
        });
    } else {
      toast.error("Please Provide  valid input");
    }
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
          label="Supplier Name"
          name="SupplierName"
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
