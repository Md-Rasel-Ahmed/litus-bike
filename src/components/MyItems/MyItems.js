import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import ReactLoading from "react-loading";
import axios from "axios";

import { toast } from "react-toastify";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(o//dd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function MyItems() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = React.useState(true);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    const getitems = async () => {
      let loginuserEmail = user.email;
      let url = `https://aqueous-harbor-59183.herokuapp.com/useritem`;
      try {
        const { data } = await axios.get(`${url}?email=${loginuserEmail}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        if (error.response.status === 403 || error.response.status === 401) {
          navigate("/login");
        }
        if (error.message === "Network Error") {
          window.location.reload();
        }
      }
    };

    getitems();
  }, [user]);
  //   remove items from
  const removeItem = (id) => {
    let confirmDialog = window.confirm(
      "Are you sure you want to remove this item?"
    );
    if (confirmDialog) {
      const url = `https://aqueous-harbor-59183.herokuapp.com/userItem/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
          console.log(products);

          let findDeleteStudent = products.find((student) => student._id == id);
          toast.error(`${findDeleteStudent.name} has been deleted`);
        })
        .catch((err) => {});
    }
  };
  return (
    <>
      {" "}
      <h1 align="center">Your added all items here</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Product Name</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              <StyledTableCell align="right">Quantity</StyledTableCell>
              <StyledTableCell align="right">Supliar Name</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          {!loading && (
            <TableBody>
              {products?.map((row) => (
                <StyledTableRow key={row._id}>
                  <StyledTableCell align="right">{row.name}</StyledTableCell>
                  <StyledTableCell align="right">{row.price}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.quantity}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.sepliarName}
                  </StyledTableCell>
                  <StyledTableCell
                    onClick={() => removeItem(row._id)}
                    align="right"
                  >
                    <Button variant="text" color="error">
                      <DeleteIcon />
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          )}
        </Table>
      </TableContainer>
      {!loading && (
        <h1 align="center">{!products.length > 0 && "Emty Items"}</h1>
      )}
      <br />
      {loading && (
        <ReactLoading
          style={{ margin: "10px auto", height: "100px", width: "50px" }}
          type={"cylon"}
          color={"black"}
          height={100}
          width={50}
        />
      )}
      <div align="center">
        <Button variant="contained" color="primary">
          <Link
            style={{ textDecoration: "none", color: "#fff" }}
            to="/addnewitem"
          >
            Add New Item
          </Link>
        </Button>
      </div>
    </>
  );
}
