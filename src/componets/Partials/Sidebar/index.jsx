import React from "react";
import Header from "../Header";
import SideBar from "../../View/SideBar";
import "./index.css";
import { Box } from "@mui/material";

function mainSidebar({ children }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <div className="row">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="content">{children}</div>
      </div>
    </Box>
  );
}

export default mainSidebar;
