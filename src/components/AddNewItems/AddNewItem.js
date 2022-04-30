import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export default function AddNewItem() {
  return (
    <div align="center">
      <h1>Add New Item</h1>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { width: "300px", padding: "5px" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="Product Name"
          variant="standard"
        />
        <br />
        <TextField
          id="standard-basic"
          label=" Price"
          type="number"
          variant="standard"
        />
        <br />
        <TextField
          id="standard-basic"
          label="Quantity"
          type="number"
          variant="standard"
        />
        <br />
        <TextField id="standard-basic" label="Standard" variant="standard" />
        <br />
        <Button variant="outlined" color="primary">
          Add
        </Button>
      </Box>
    </div>
  );
}
