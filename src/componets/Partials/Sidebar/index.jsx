import React from "react";
import Header from "../Header/Header";
import SideBar from "./SideBar";
import "./index.css";
function mainSidebar({ children }) {
  return (
    <>
      <Header />
      <div className="row">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="content">
          {children}
        </div>
      </div>
    </>
  );
}

export default mainSidebar;
