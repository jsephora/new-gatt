import * as React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { footerText } from './footer.module.scss'
import { StaticImage } from 'gatsby-plugin-image'

const Footer = () => {
  return (
    <>
      <footer className='footer mt-auto pt-5 pb-3'>
        <Container className='text-center'>
          <Row className='align-items-center'>
            <Col>
              <StaticImage src='../images/social-placeholder.png'
              className='mb-4' />
              <br></br>
              <span className={footerText}>© Allied Robotics Pty Ltd</span>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default Footer
