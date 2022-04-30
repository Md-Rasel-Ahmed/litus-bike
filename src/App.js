import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import AllPage from "./components/AllPage";
import Register from "./components/Register/Register";
import ProductDetails from "./components/ProductsDetails/ProductDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequirAuth from "./components/RequrAuth/RequirAuth";
import ManageProduct from "./components/ManageAllproducts/ManageProduct";
import AddNewItem from "./components/AddNewItems/AddNewItem";
function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<AllPage></AllPage>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/productDetails/:id"
          element={
            <RequirAuth>
              <ProductDetails></ProductDetails>
            </RequirAuth>
          }
        ></Route>
        <Route
          path="/manageProduct"
          element={<ManageProduct></ManageProduct>}
        ></Route>
        <Route path="/addnewitem" element={<AddNewItem></AddNewItem>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
