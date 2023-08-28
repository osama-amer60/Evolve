import React from "react";
import NavBar from "../navBar";
import SideBar from "../sideBar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="">
        <NavBar />
        <div className="layout-bg  d-flex">
          <div className="side-bar ">
            <SideBar />
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <main className="main-section">{children}</main>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
