/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Joey Sephora",
    siteUrl: "https://jsephora.gatsbyjs.io/",
    description: "A website I am building in order to refresh my ReactJS skills and learn about the new features of Gatsby 5",
  },
  plugins: [
    `gatsby-plugin-image`, 
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {},
        // Relates to "options.failOn" in https://sharp.pixelplumbing.com/api-constructor#parameters
        failOn: `warning`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // rome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
name: `work`,
        path: `${__dirname}/work`,
      }
    },
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Figtree`,
            file: `https://fonts.googleapis.com/css2?family=Figtree:wght@300..900&display=swap`,
          },
        ],
      },
    },
  ],
};