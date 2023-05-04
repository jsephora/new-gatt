import React from 'react'
import { workIndex, heading } from './layout.module.scss'
import { Container, Row } from 'react-bootstrap'
import Underline from '../images/underline.svg'
import MainNav from './mainnav'
import Subtitle from '../components/subtitle'

const Layout = ({ pageTitle, children, subTitle }) => {
  return (
    <>
      <MainNav />
      <Container>
        <Row>
          <main className={workIndex}>
            <hgroup className='my-5'>
              <h1 className={heading}>{pageTitle}</h1>
              <img src={Underline} className='mb-3' alt='SVG underline image' />
              <Subtitle>{subTitle}</Subtitle>
            </hgroup>
            {children}
          </main>
        </Row>
      </Container>
    </>
  )
}

export default Layout
