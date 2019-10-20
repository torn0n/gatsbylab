module.exports = {
  siteMetadata: {
    title: `Thomas Ornon - Développeur web Full Stack`,
    description: `Thomas Ornon : Développeur Web Full Stack et Mobile. Angular, React, Vue.js, Ionic, GraphQL, Node.js, Docker, Kubernetes, AWS, tout m'intéresse ! N'hésitez pas à me contacter pour échanger !`,
    author: `@tornon`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#121317`,
        theme_color: `#121317`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
