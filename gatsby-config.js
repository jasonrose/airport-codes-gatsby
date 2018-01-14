module.exports = {
  siteMetadata: {
    title: "Gatsby Default Starter"
  },
  pathPrefix: "/airport-codes-gatsby",
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/data/`
      }
    },
    "gatsby-transformer-json",
    "gatsby-plugin-react-helmet"
  ]
};
