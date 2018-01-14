module.exports = {
  siteMetadata: {
    title: "Gatsby Default Starter",
    baseUrl: process.env.BASE_URL
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
    "gatsby-plugin-stylus",
    "gatsby-transformer-json",
    "gatsby-plugin-react-helmet"
  ]
};
