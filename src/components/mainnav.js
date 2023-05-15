import * as React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  navBar,
  siteTitle,
  homeLink,
  workLink,
  aboutLink,
  resumeLink,
} from './mainnav.module.scss'

const MainNav = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Navbar className={navBar} expand='lg'>
      <Container>
        <Navbar.Brand>
          <Link to='/' className={siteTitle}>
            {data.site.siteMetadata.title}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse
          id='basic-navbar-nav'
          className='justify-content-between'
        >
          <Nav>
            <Nav.Link className={homeLink} href='/'>
              Home
            </Nav.Link>
            <Nav.Link className={workLink} href='/work'>
              Work
            </Nav.Link>
            <Nav.Link className={aboutLink} href='/about'>
              About
            </Nav.Link>
            <Nav.Link className={resumeLink} href='/resume' disabled>
              Resumé
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href='#' disabled>
              ENG | JP
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MainNav
