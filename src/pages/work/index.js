import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import Banner from '../../components/banner'
import heroClimateActive from './assets/heroClimateActive.jpg'
import heroPsims from './assets/heroPsims.png'
import journeyMap from './assets/heroJourneyMap.png'
import pic04 from './assets/pic04.jpg'
import pic05 from './assets/pic05.jpg'
import pic06 from './assets/pic06.jpg'

const WorkPage = () => {
  return (
    <Layout pageTitle='Work'>
      <Banner 
        className='something' 
        title='Work' 
        subtitle='A small selection of projects I have worked on recently'
        fill='#FFFF00' 
        bgColor='#212840'
      />
      <section id='one' className='tiles'>
        <article style={{ backgroundImage: `url(${heroClimateActive})` }}>
          <Link
            aria-label='Link to Climate Active'
            to='/work/climate-active/'
            className='link primary'
          >
            <header className='major'>
              <h3>Climate Active</h3>
              <p>UI Design, UX Design, Frontend Dev</p>
            </header>
          </Link>
        </article>

        <article style={{ backgroundImage: `url(${heroPsims})` }}>
          <Link
            aria-label='Link to PSIMS'
            to='/work/psims/'
            className='link primary disabled'
          >
            <header className='major'>
              <h3>PSIMS</h3>
              <p>Coming soon</p>
            </header>
          </Link>
        </article>

        <article style={{ backgroundImage: `url(${pic04})` }}>
          <Link
            aria-label='Link to Landing Page'
            to='#'
            className='link primary disabled'
          >
            <header className='major'>
              <h3>HP Printer App</h3>
              <p>In the works</p>
            </header>
          </Link>
        </article>

        <article style={{ backgroundImage: `url(${journeyMap})` }}>
          <Link
            aria-label='Link to Landing Page'
            to='#'
            className='link primary disabled'
          >
            <header className='major'>
              <h3>Service experience team</h3>
              <p>Under construction</p>
            </header>
          </Link>
        </article>
        <article style={{ backgroundImage: `url(${pic05})` }}>
          <Link
            aria-label='Link to Landing Page'
            to='#'
            className='link primary disabled'
          >
            <header className='major'>
              <h3>Honda EV</h3>
              <p>On the to-do list</p>
            </header>
          </Link>
        </article>
        <article style={{ backgroundImage: `url(${pic06})` }}>
          <Link
            aria-label='Link to Landing Page'
            to='#'
            className='link primary disabled'
          >
            <header className='major'>
              <h3>ATO Beta</h3>
              <p>In the pipeline</p>
            </header>
          </Link>
        </article>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title='Work' />

export default WorkPage
