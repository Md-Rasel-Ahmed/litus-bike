import logo from "./logo.svg";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
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
import MyItems from "./components/MyItems/MyItems";
import NotFound from "./components/NotFound";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import MouseParticles from "react-mouse-particles";
import UserLikeItems from "./components/UserLikeItems/UserLikeItems";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
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
          element={
            <RequirAuth>
              <ManageProduct></ManageProduct>
            </RequirAuth>
          }
        ></Route>
        <Route
          path="/addnewitem"
          element={
            <RequirAuth>
              <AddNewItem></AddNewItem>
            </RequirAuth>
          }
        ></Route>
        <Route
          path="/myItems"
          element={
            <RequirAuth>
              <MyItems></MyItems>
            </RequirAuth>
          }
        ></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route
          path="/userLikeItems"
          element={<UserLikeItems></UserLikeItems>}
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
      <MouseParticles g={1} color="random" cull="col,image-wrapper" />
    </div>
  );
}

export default App;
