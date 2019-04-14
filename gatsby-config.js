module.exports = {
  siteMetadata: {
    title: `UI/UX Development | James Lomas`,
    description: `A great online portfolio for potential clients and employers to view James's projects.`,
    author: `@jameslomas04`,
    keywords: `User interface design, user experience design, James Lomas, software, application developer, web developer, frontend web developer, react developer, react native developer`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "gawu86z9abol",
        accessToken:
          "e83fce7836304ba2287f90af8166c1a38ffe369f152439246ceb0f829759d6ae",
      },
    },
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logos/portfolioLogo.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
