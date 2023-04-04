import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="people walking between city buildings in Japan"
        src="https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2084&q=80"
        />
      <p>As the mountain snows begin to recede and the bare trees start producing leaves, an exciting sense of tension takes over cities and towns across the country. By late March, the Japanese flock outside to reign in the season with the incoming cherry blossom.</p>
      <StaticImage
        alt="mt Fuji with snow framed between sakura cherry blossoms"
        src="../images/Fuji-san-with-sakura-small.jpg"
      />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage