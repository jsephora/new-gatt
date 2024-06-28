import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import { Container, Row, Col } from 'react-bootstrap'

const AboutPage = () => {
  return (
    <Layout pageTitle='About Me'>
      <Container>
        <Row>
          <Col md={6} className='py-5'>
          <h1 className='pb-3'>About me</h1>
            <p>
              Hi there! I'm the proud creator of this site, which I built with
              Gatsby.
            </p>
            <p>My life has been an exciting journey, during which I've pursued my passions with great zeal. As a seasoned traveler, I understand what it's like to be outside of my comfort zone, and I know from experience that every new path brings new knowledge and expands the mind.</p>
            <p>Currently, I find myself in a small city in Japan, where I am experiencing an average Japanese life outside of bustling cities like Tokyo and Osaka. Although we can reach these metropolises within two hours by train, we are pleasantly surrounded by rice paddies and family residences. At night, the cacophony of frogs is almost as loud as the Shinkansen speeding past.</p>
            <p>Despite the low wages, we live a modest life that is not bad at all. The food is inexpensive and delicious, and the people are nice. The area is quite safe as well.</p>
          </Col>
          <Col md={6} className='py-5'>
            <StaticImage
              alt="view from my daughter's school"
              src="../images/mytown.jpeg"
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const Head = () => <Seo title='About Me' />

export default AboutPage
