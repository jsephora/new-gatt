import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  navBar,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from "./navbar.module.scss";

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={navBar}>
      <header className={siteTitle}>
        <Link to="/">{data.site.siteMetadata.title}</Link>
      </header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/work" className={navLinkText}>
              Work
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/resume" className={navLinkText}>
              Resumé
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
