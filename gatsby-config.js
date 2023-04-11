/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Joey's New Website",
    siteUrl: "https://jsephora.gatsbyjs.io/",
    description: "A website I am building in order to refresh my ReactJS skills and learn about the new features of Gatsby 5",
  },
  plugins: [
    "gatsby-plugin-image", 
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx"
  ],
};
