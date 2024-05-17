import { Typography } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <div
      className="d-flex justify-content-between bg-dark text-white p-3 px-5 align-end "
      style={{ minWidth: "1440px" ,height:"76px",alignItems:"center"}}
    >
      <div
        className="d-flex justify-content-between gap-5 "
        style={{ width: "453px" ,color:"#FFFFFF"}}
      >
        <Typography
          sx={{ fontSize: "20px", fontWeight: "400", lineHeight: "23.44px" }}
        >
          Terms and Service
        </Typography>
        <Typography
          sx={{ fontSize: "20px", fontWeight: "400", lineHeight: "23.44px" }}
        >
          Privacy Policy
        </Typography>
      </div>
      <div >
        <Typography
          sx={{ fontSize: "20px", fontWeight: "400", lineHeight: "23.44px" }}
          
        >
          All Rights Reserved @ Freight Systems 2024
        </Typography>
      </div>
    </div>
  );
};
