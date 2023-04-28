import * as React from 'react'
import MainNav from './mainnav'
// import { container } from './homelayout.module.scss'
import { StaticImage } from 'gatsby-plugin-image'
import Footer from './footer'
import BottomNav from './bottomnav'
import { Container } from 'react-bootstrap'

const HomeLayout = ({ children }) => {
  return (
    <>
      <MainNav />
      <StaticImage
        alt='my badboy background image'
        src='../images/crosswalk.jpg'
      />
      <main className='flex-shrink-0'>
        <Container>{children}</Container>
      </main>
      <BottomNav />
      <Footer />
    </>
  )
}

export default HomeLayout
