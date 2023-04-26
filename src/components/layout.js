import * as React from "react";
import { container } from "./layout.module.scss";
import MainNav from "./mainnav";

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <MainNav />
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
