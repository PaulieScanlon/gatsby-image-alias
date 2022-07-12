module.exports = {
  siteMetadata: {
    title: 'gatsby-image-alias'
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`
      }
    },
    'gatsby-transformer-remark'
  ]
};
