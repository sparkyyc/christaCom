module.exports = {
  siteMetadata: {
    title: `Christa Sparks Portfolio`,
    description: `Christa Sparks personal portfolio website`,
    author: `Christa Sparks`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `christaCom`,
        short_name: `portfolio`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
          // include: /\.inline\.svg$/
        }
      }
    }
    
  ],
}
