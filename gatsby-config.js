require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: "Worklog",
    description: "This is where I hype my work.",
  },

  plugins: [
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/data/',
      },
    },
    {
       resolve: 'gatsby-source-filesystem',
       options: {
         name: 'queries',
         path: `${__dirname}/src/queries/`,
       },
     },
     {
       resolve: '@wyze/gatsby-source-graphql',
       options: {
         headers: {
           authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
         },
         url: process.env.STROM_ENDPOINT,
       },
     }
  ],
}
