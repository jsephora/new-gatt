import React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import Banner from '../../components/banner'
// import heroClimateActive from './assets/heroClimateActive.jpg'

const ClimateActive = () => {
  return (
    <Layout pageTitle='Climate Active'>
      <Banner 
        title='Climate Active' 
        subtitle='UI Design, Frontend Dev, ReactJS' 
        fill='#F7FC64'
        bgColor='#6fc3df'
      />
    </Layout>
  )
}

export const Head = () => <Seo title='Climate Active' />

export default ClimateActive
