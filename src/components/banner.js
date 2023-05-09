import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Subtitle from '../components/subtitle'
import Underline from '../components/underline'
import { banner, major, heading } from './banner.module.scss'

const Banner = ({ title, subtitle, className, fill, bgColor }) => {
  return (
    <section 
      id={banner} 
      className={`d-flex ${major}`}
      style={{ backgroundColor: `${bgColor}` }}
      >
      <Container>
        <Row>
          <hgroup className={className}>
            <h1 className={heading}>{title}</h1>
            <Underline className='mb-4' fill={fill} />
            <Subtitle>{subtitle}</Subtitle>
          </hgroup>
        </Row>
      </Container>
    </section>
  )
}

export default Banner
