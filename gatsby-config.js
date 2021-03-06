module.exports = {
  siteMetadata: {
    title: `Drupal & Gatsby website test`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
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
        background_color: `#0071b8`,
        theme_color: `#0071b8`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `http://fornetpwa.fornetmaroc.com:8118`
      },
    },
    {
      // Note: this plugin is coded to only work on production
      resolve: `gatsby-plugin-subscribers`,
      options: {
        id: 'your subscribersSiteId goes here',
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/news/`, `/news/*`],
        //appendScript: require.resolve(`src/custom-sw-code.js`),
        importWorkboxFrom: `cdn`,
      },
    },
  ],
}
 