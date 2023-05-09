import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Container, Row, Col } from 'react-bootstrap'
import pic01 from './assets/pic01.jpg'
import pic02 from './assets/pic02.jpg'
import pic03 from './assets/pic03.jpg'
import pic04 from './assets/pic04.jpg'
import pic05 from './assets/pic05.jpg'
import pic06 from './assets/pic06.jpg'

const WorkPage = () => {
  return (
    <Layout pageTitle='Work'>
      <section id='one' className='tiles'>
        <article style={{ backgroundImage: `url(${pic01})` }}>
          <Link
            aria-label='Link to Landing Page'
            to='/landing'
            className='link primary'
          >
            <header className='major'>
              <h3>Aliquam</h3>
              <p>Ipsum dolor sit amet</p>
            </header>
          </Link>
        </article>
        <article style={{ backgroundImage: `url(${pic02})` }}>
          <Link
            aria-label='Link to Landing Page'
            to='/landing'
            className='link primary'
          >
            <header className='major'>
              <h3>Tempus</h3>
              <p>feugiat amet tempus</p>
            </header>
          </Link>
        </article>
        <article style={{ backgroundImage: `url(${pic03})` }}>
          <Link
            aria-label='Link to Landing Page'
            to='/landing'
            className='link primary'
          >
            <header className='major'>
              <h3>Magna</h3>
              <p>Lorem etiam nullam</p>
            </header>
          </Link>
        </article>
        <article style={{ backgroundImage: `url(${pic04})` }}>
          <Link
            aria-label='Link to Landing Page'
            to='/landing'
            className='link primary'
          >
            <header className='major'>
              <h3>Ipsum</h3>
              <p>Nisl sed aliquam</p>
            </header>
          </Link>
        </article>
        <article style={{ backgroundImage: `url(${pic05})` }}>
          <Link
            aria-label='Link to Landing Page'
            to='/landing'
            className='link primary'
          >
            <header className='major'>
              <h3>Consequat</h3>
              <p>Ipsum dolor sit amet</p>
            </header>
          </Link>
        </article>
        <article style={{ backgroundImage: `url(${pic06})` }}>
          <Link
            aria-label='Link to Landing Page'
            to='/landing'
            className='link primary'
          >
            <header className='major'>
              <h3>Etiam</h3>
              <p>Feugiat amet tempus</p>
            </header>
          </Link>
        </article>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title='Work' />

export default WorkPage
