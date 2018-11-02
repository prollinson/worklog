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
  ],
}
