import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Subtitle from '../components/subtitle'
import Underline from '../images/underline.svg'
import { banner, major, heading } from './banner.module.scss';

const Banner = () => {
  return (
      <section id={banner} className={`d-flex ${major}`}>
        <Row>
        <hgroup className='my-5'>
              <h1 className={heading}>Work</h1>
              <img src={Underline} className='mb-3' alt='SVG underline image' />
              <Subtitle>Subtitle goes here</Subtitle>
            </hgroup>
        </Row>
      </section>
  )
}

export default Banner
