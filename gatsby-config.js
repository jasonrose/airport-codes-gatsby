module.exports = {
  siteMetadata: {
    title: "Gatsby Default Starter",
    appPath:
      process.env.BASE_URL.indexOf("localhost") === -1
        ? ""
        : process.env.BASE_URL + "/airport-codes-gatsby",
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
