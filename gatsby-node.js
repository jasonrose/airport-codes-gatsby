/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");

exports.onCreateNode = (
  { node, getNode, boundActionCreators },
  pluginOptions
) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === "AirportsJson") {
    const slug = createFilePath({ node, getNode, basePath: "pages" });
    createNodeField({
      node,
      name: "slug",
      value: slug
    });
    createNodeField({
      node,
      name: "canonical",
      value: `${pluginOptions.siteUrl || ""}${slug}`
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allAirportsJson {
          edges {
            node {
              fields {
                canonical
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allAirportsJson.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve("./src/templates/detail.js"),
          context: {
            slug: node.fields.slug
          }
        });
      });
      resolve();
    });
  });
};
