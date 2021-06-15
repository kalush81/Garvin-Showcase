
const path = require(`path`)
module.exports = {
  /* site config */
  siteMetadata: {
    name: 'xxx set the app name',
    title: 'Garwin artwork showcase',
    description: 'pictures of famous people'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `backgrounds`,
        path: path.join(__dirname, `src`, `bg`),
      },
    },
    `gatsby-transformer-sharp`,
    'gatsby-plugin-sharp',
  ],
}
/* 
  1. przygotowac grafiki, podac folder, query imgs from graphql
  2. zrobic nav bar, 
  3. zrobic footer
*/