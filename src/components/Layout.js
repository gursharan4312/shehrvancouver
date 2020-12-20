import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";
import "./css/bootstrap.min.css";

function Layout({ children }) {
  return (
    <div className="layout">
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/brands.min.css"
          integrity="sha512-D0B6cFS+efdzUE/4wh5XF5599DtW7Q1bZOjAYGBfC0Lg9WjcrqPXZto020btDyrlDUrfYKsmzFvgf/9AB8J0Jw=="
          crossorigin="anonymous"
        />
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
