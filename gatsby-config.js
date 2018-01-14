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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "img",
        path: `${__dirname}/photos/`
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-stylus",
    "gatsby-transformer-json",
    "gatsby-transformer-sharp"
  ]
};
