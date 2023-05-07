import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Container, Row, Col } from 'react-bootstrap'
import { previewTile, tileMiddle, tileImage, tileOverlay } from '../../components/layout.module.scss'

const WorkPage = ({ data }) => {
  // const image = getImage(node.frontmatter.hero_image.GatsbyImage)
  return (
    <Layout pageTitle='Work' subTitle='A small selection of projects I have worked on recently' >
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <Col md={6}>
            <div className={previewTile}>
              <div className={tileOverlay}>
                <Link to={`/work/${node.frontmatter.slug}`}>
                  <GatsbyImage
                    image={node.frontmatter.hero_image.childImageSharp.gatsbyImageData}
                    // alt={node.frontmatter.hero_image_alt}
                    className={tileImage}
                  />
                  <div className={tileMiddle}>
                    <h2>{node.frontmatter.title}</h2>
                  </div>
                </Link>
              </div>
            </div>
          </Col>
        </article>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: ASC } }) {
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
