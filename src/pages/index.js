import React from "react";
import Link from "gatsby-link";
import AirportList from "../components/AirportList";
import Header from "../components/Header";

const IndexPage = ({ data }) => {
  return (
    <section>
      <Header />
      <AirportList
        airports={data.allAirportsJson.edges}
        thumbnails={data.imagePreviews.edges}
      />
    </section>
  );
};

export default IndexPage;

export const query = graphql`
  query AirportListQuery {
    allAirportsJson {
      edges {
        node {
          id
          fields {
            canonical
          }
        }
      }
    }
    imagePreviews: allImageSharp {
      edges {
        node {
          id
          sizes {
            base64
          }
        }
      }
    }
  }
`;
