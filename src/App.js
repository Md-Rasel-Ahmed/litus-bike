import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Product/Products";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Products></Products>
      <Routes></Routes>
    </div>
  );
}

export default App;
