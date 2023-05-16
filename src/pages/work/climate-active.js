import React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import Banner from '../../components/banner'
import { StaticImage } from 'gatsby-plugin-image'
import { Container, Row, Col } from 'react-bootstrap'

const ClimateActive = () => {
  return (
    <Layout pageTitle='Climate Active'>
      <Banner
        title='Climate Active'
        subtitle='UI Design, Frontend Dev, ReactJS'
        fill='#F7FC64'
        bgColor='#6fc3df'
      />
      <Container>
        <Row className='mt-5'>
          <Col>
            <StaticImage
              src='./assets/heroClimateActive.jpg'
              alt='climate active screen design'
            />
            <caption>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </caption>
          </Col>
        </Row>
        <Row className='mb-5'>
          <Col>
            <h2 className='mb-3'>Key points</h2>
            <ul>
              <li>75 - 82% of current users are tax consultants</li>
              <li>
                Goal is to make the application easier so more businesses will
                apply themselves
              </li>
              <li>Replaces paper form and "smart" PDF form</li>
            </ul>
          </Col>
        </Row>
        <Row className='mb-5'>
          <Col md={6} >
            <StaticImage
              src='./assets/whiteboarding.png'
              alt='whiteboard session'
            />
          </Col>
          <Col md={6}>
            <h2 className='mb-3 mt-3 mt-md-0'>Whiteboarding</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiumdod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.{' '}
            </p>
          </Col>
        </Row>
        <Row className='mb-5'>
          <Col md={6} className='order-md-2'>
            <StaticImage
              src='./assets/wireframes.png'
              alt='drawing wireframes'
            />
          </Col>
          <Col md={6} className='order-md-1' >
            <h2 className='mb-3 mt-3 mt-md-0'>Wireframes</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiumdod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.{' '}
            </p>
          </Col>
        </Row>
        <Row className='mb-5'>
          <Col md={6}>
            <StaticImage
              src='./assets/high-fidelity.png'
              alt='high fidelity UI designs'
            />
          </Col>
          <Col md={6}>
            <h2 className='mb-3 mt-3 mt-md-0'>High fidelity</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiumdod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.{' '}
            </p>
          </Col>
        </Row>
        <Row className='mb-5'>
          <Col md={6} className='order-md-2'>
            <StaticImage src='./assets/prototyping.png' alt='writing code' />
          </Col>
          <Col md={6} className='order-md-1'>
            <h2 className='mb-3 mt-3 mt-md-0'>Prototype</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiumdod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.{' '}
            </p>
          </Col>
        </Row>
        <Row className='mb-5'>
          <Col md={6}>
            <StaticImage
              src='./assets/usability-test.png'
              alt='usability testing written on a post-it note'
            />
          </Col>
          <Col md={6}>
            <h2 className='mb-3 mt-3 mt-md-0'>Usability testing</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.{' '}
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const Head = () => <Seo title='Climate Active' />

export default ClimateActive
