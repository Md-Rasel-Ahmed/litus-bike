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
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { toast } from "react-toastify";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function ManageProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(1);
  const [page, setPage] = useState(1);
  useEffect(() => {
    let url = `https://aqueous-harbor-59183.herokuapp.com/product?page=${page}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, [page]);

  useEffect(() => {
    fetch("https://aqueous-harbor-59183.herokuapp.com/productCount")
      .then((res) => res.json())
      .then((data) => {
        let pages = data.count;
        setPageCount(Math.ceil(pages / 2));
      });
  }, []);

  // pagination handler
  // const handleChange = (event, value) => {
  //   setPage(value);
  //   console.log(event);
  // };

  //   remove items from
  const removeItem = async (id) => {
    let confirmDialog = window.confirm(
      "Are you sure you want to remove this item?"
    );
    if (confirmDialog) {
      await fetch(`https://aqueous-harbor-59183.herokuapp.com/product/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
          let findDeleteStudent = products.find((student) => student._id == id);
          toast.error(`${findDeleteStudent.name} has been deleted`);
        });
    }
  };

  return (
    <>
      {" "}
      <h1 align="center">Manage Your Products</h1>
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
          <TableBody>
            {products?.map((row) => (
              <StyledTableRow key={row._id}>
                <StyledTableCell align="right">{row.name}</StyledTableCell>
                <StyledTableCell align="right">{row.price}</StyledTableCell>
                <StyledTableCell align="right">{row.quantity}</StyledTableCell>
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
        </Table>
      </TableContainer>
      <div
        style={{ padding: "10px", display: "flex", justifyContent: "center" }}
      >
        {loading && (
          <ReactLoading
            style={{ margin: "10px auto", height: "100px", width: "50px" }}
            type={"cylon"}
            color={"black"}
            height={100}
            width={50}
          />
        )}
        <br />
        <Stack spacing={2}>
          <Pagination
            onClick={(e) => setPage(e.target.textContent)}
            // page={page}
            // onChange={handleChange}
            count={pageCount}
            shape="rounded"
          />
        </Stack>
      </div>
      <br />
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
