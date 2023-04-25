import * as React from "react";
import Navbar from "./navbar";
import {
  container,
  heading,
} from "./layout.module.scss";

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <Navbar />
      <div className={container}>
        <main>
          {/* <h1 className={heading}>{pageTitle}</h1> */}
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
