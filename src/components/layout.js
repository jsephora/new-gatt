import React from 'react'
import { workIndex, heading } from './layout.module.scss'
import { Container, Row } from 'react-bootstrap'
import MainNav from './mainnav'

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <MainNav />
      <Container>
        <Row>
          <main className={workIndex}>
            <h1 className={heading}>{pageTitle}</h1>
            {children}
          </main>
        </Row>
      </Container>
    </>
  )
}

export default Layout
