import * as React from 'react'
import {Link, graphql} from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const WorkPage = ({data}) => {
    return (
        <Layout pageTitle="Work">
            {data
                .allMdx
                .nodes
                .map((node) => (
                    <article key={node.id}>
                        <h2>
                            <Link to={`/work/${node.frontmatter.slug}`}>
                                {node.frontmatter.title}
                            </Link>
                        </h2>
                        <p>Posted: {node.frontmatter.hero_image.id}</p>
                        <p>{node.excerpt}</p>
                    </article>
                ))
            }       
        </Layout>
    )
}

export const query = graphql `
query MyQuery {
  allMdx {
    nodes {
      frontmatter {
        hero_image {
          id
        }
      }
    }
  }
}
`

export const Head = () => <Seo title="Work"/>

export default WorkPage