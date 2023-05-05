import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const BlogPage = ({ data }) => {
  // const image = getImage(node.frontmatter.hero_image.GatsbyImage)
  return (
    <Layout pageTitle="My Blog Posts">
      {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
            <GatsbyImage image={node.frontmatter.hero_image.childImageSharp.gatsbyImageData} alt={node.frontmatter.hero_image_alt} />
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query
    {
      allMdx(sort: {frontmatter: {date: DESC}}) {
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

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage