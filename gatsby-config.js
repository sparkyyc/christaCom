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
      // options: {
      //   name: `gatsby-starter-default`,
      //   short_name: `starter`,
      //   start_url: `/`,
      //   background_color: `#663399`,
      //   theme_color: `#663399`,
      //   display: `minimal-ui`,
      //   // icon: `/src/images/Asset 11.png`, // This path is relative to the root of the site.
      // },
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
