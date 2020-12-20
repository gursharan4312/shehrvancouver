import React from "react";
import Header from "./Header";
import "./css/bootstrap.min.css";

function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
