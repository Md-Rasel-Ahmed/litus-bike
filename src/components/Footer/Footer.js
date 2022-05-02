import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  return (
    <div>
      <footer
        style={{
          backgroundColor: "#1976D2",
          color: "#fff",
          position: "relative",
          bottom: "-50px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            justifyContent: "center",
            padding: "40px",
          }}
        >
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
          <a href="">Terms of use </a>
          <a href="">Privacy Policy </a>
        </div>
        <div
          style={{
            display: "flex",
            paddingBottom: "20px",
            justifyContent: "center",
          }}
        >
          {new Date().getFullYear()} © Local.mv - All Rights Reserved
        </div>
      </footer>
    </div>
  );
};

export default Footer;
