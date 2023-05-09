import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Container, Row, Col } from 'react-bootstrap'

const WorkPage = ({ data }) => {
  // const image = getImage(node.frontmatter.hero_image.GatsbyImage)
  return (
    <Layout pageTitle='Work'>
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <Col md={6}>
            <h2>
              <Link to={`/work/${node.frontmatter.slug}`}>
                <GatsbyImage
                  image={node.frontmatter.hero_image.childImageSharp.gatsbyImageData}
                  alt={node.frontmatter.hero_image_alt}
                  />
                {node.frontmatter.title}
              </Link>
            </h2>
            {/* <p>Posted: {node.frontmatter.date}</p> */}
          </Col>
        </article>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
          hero_image_alt
        }
        id
      }
    }
  }
`

export const Head = () => <Seo title='Work' />

export default WorkPage
