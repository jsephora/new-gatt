import * as React from "react";
import Navbar from "./navbar";
import {
  container,
} from "./homelayout.module.scss";
import { StaticImage } from "gatsby-plugin-image";

const HomeLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <StaticImage
        alt=""
        src="../images/homepage-background.png"
      />
      <div className={container}>
        <main>
          {children}
        </main>
      </div>
    </>
  );
};

export default HomeLayout;
