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
            The goal of this project is to build a portal that enables customers to register with Climate Active and obtain carbon neutral certification. Entry to the portal is via the "GET STARTED" button at the top right of the screen.
            </caption>
          </Col>
        </Row>
        <Row className='mb-5'>
          <Col>
            <h2 className='mb-3'>Key points</h2>
            <ul>
              <li>The previous method of registering for certification was via a PDF smartform.</li>
              <li>
                The portal is required to collect the same data as the previous form, while also simplifying the process.
              </li>
              <li>Discovery and UX research conducted by third party prior to project initiation.</li>
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
            <h2 className='mb-3 mt-3 mt-md-0'>New requirements and technical limitations</h2>
            <p>
              Initially, a third-party UX vendor created wireframes and user flows. However, due to new requirements and technical limitations, significant modifications were necessary, resulting in consequential changes to the entire user flow. 
            </p>
            <p>
              I collaborated with the business analyst and lead developer to create new UI designs that addressed these requirements while remaining technically feasible. Additionally, new designs were created for all seven of the carbon-neutral categories. At this point, the project delivery manager began to express concerns regarding the potential negative impact on budget and timelines.
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
            <h2 className='mb-3 mt-3 mt-md-0'>Figma - XD - Figma conversion</h2>
            <p>
              The third party vendor created a style guide and some inital UI designs using Figma. The style guide was based off the Department's own style guide. Unfortunately, due to Australian government security rules regarding offshore servers we were not allowed to use Figma. This meant the Figma files needed to be converted to Adobe XD files but the conversion made them practically unusable. I subsequently did all of the UI design work in Adobe XD until...
            </p>
            <p>
              For some background to this, at around this time a number of high profile organisations (Optus, Medibank) were targeted by hackers and suffered massive information breaches. Security was tightened in the Department and all processes and software was reviewed for potential vulnerabilities. Adobe's cloud services were disabled and Zeplin was banned. Figma was also still disallowed. This meant we were left with only Adobe XD (without Adobe Cloud). Obviously, this was a big problem for me as I needed to handover designs with CSS specifications.
            </p>
            <p>
              After some "talks", we were allowed an exemption to use Figma, with some caveats. Thus began my return to Figma and the conversion and creation of Figma components, which I honestly quite enjoyed.
            </p>
          </Col>
        </Row>
        {/* <Row className='mb-5'>
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
        </Row> */}
      </Container>
    </Layout>
  )
}

export const Head = () => <Seo title='Climate Active' />

export default ClimateActive
