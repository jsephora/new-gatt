import React from 'react'
import HomeLayout from '../components/homelayout'
import Seo from '../components/seo'
import { Container, Row, Col } from 'react-bootstrap'
import { StaticImage } from 'gatsby-plugin-image'
import { workIndex } from '../components/layout.module.scss'

const IndexPage = () => {
  return (
    <HomeLayout pageTitle='Home'>
      <Container className='my-5'>
        <Row className="align-items-end">
          <Col md='6' className={workIndex}>
            <StaticImage
              alt="yellow spear to start the paragraph of text"
              src='../images/Text-block-pre.svg'
              layout='constrained'
              width={274}
              height={6}
            />
            <p className='mt-5'>
              Hello there! I'm excited to introduce myself and learn more about
              you.
            </p>
            <p>
              My name is Joey and I'm a UI/UX Designer and Front-end Developer.
              I'm passionate about amazing user experiences and I'm always
              looking for new opportunities to learn and grow.
            </p>
            <p>
              Something Something Something
            </p>
            <p>
              I'm looking forward to getting to know you more and learning about
              your interests and ideas. Feel free to reach out if you have
              any questions or if you'd like to chat about anything!
            </p>
          </Col>
          <Col md='6' className='d-flex justify-content-end'>
            <StaticImage
              alt="graphic with joey's face"
              src='../images/joey-graphic@2x.jpg'
              placeholder='blurred'
              layout='constrained'
              width={409}
              height={377}
            />
          </Col>
        </Row>
      </Container>
    </HomeLayout>
  )
}

export function Head() {
  return (
    <>
      <html lang="en" className="h-100" />
      <body className="d-flex flex-column h-100" />
      <Seo title="Home" />
    </>
  )
}

export default IndexPage
