import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
