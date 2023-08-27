import React from "react";
import NavBar from "../navBar";
import SideBar from "../sideBar";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <NavBar />
        <div class="layout-bg">
          <div class="container-fluid">
            <div class="row">
              <div class="col-2">
                <SideBar />
              </div>
              <div class="col-10">
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
