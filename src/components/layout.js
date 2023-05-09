import React from 'react'
import { workIndex } from './layout.module.scss'
import { Container, Row } from 'react-bootstrap'
import MainNav from './mainnav'
import Banner from './banner'

const Layout = ({ children }) => {
  return (
    <>
      <MainNav />
      <Container fluid>
        <Row>
          <main className={workIndex}>
            <Banner />
            {children}
          </main>
        </Row>
      </Container>
    </>
  )
}

export default Layout
