import React from "react";
import NavBar from "../navBar";
import SideBar from "../sideBar";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <NavBar />
        <div className="layout-bg">
          <div className="container-fluid">
            <div className="row">
              <div className="col-2">
                <SideBar />
              </div>
              <div className="col-10">
                <main>{children}</main>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
