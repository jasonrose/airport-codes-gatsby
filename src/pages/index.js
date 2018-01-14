import React from "react";
import Link from "gatsby-link";
import AirportList from "../components/AirportList";

const IndexPage = ({ data }) => {
  return (
    <section>
      <AirportList airports={data.allAirportsJson.edges} />
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
  }
`;
