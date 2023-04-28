import * as React from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  navBar,
  siteTitle,
} from "./mainnav.module.scss";

const MainNav = () => {
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
    <Navbar className={navBar} bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/" className={siteTitle}>{data.site.siteMetadata.title}</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/work">Work</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/resume" disabled>Resumé</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNav;
