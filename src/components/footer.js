import * as React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { footerText } from './footer.module.scss'

const Footer = () => {
  return (
    <>
      <footer className='footer mt-auto py-3 bg-dark'>
        <Container className='text-center'>
          <Row className='align-items-center'>
            <Col>
              <span className={footerText}>© Allied Robotics Pty Ltd</span>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default Footer
