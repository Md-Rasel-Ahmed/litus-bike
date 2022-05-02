import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import Home from "./Home/Home";
import Products from "./Product/Products";
import WhatWeDo from "./WhatWeDo/WhatWeDo";

const AllPage = () => {
  return (
    <div>
      <Home></Home>
      <Products></Products>
      <AboutUs></AboutUs>
      <WhatWeDo></WhatWeDo>
    </div>
  );
};

export default AllPage;
