import Link from "gatsby-link";
import React from "react";
import Helmet from "react-helmet";
import ReactMarkdown from "react-markdown";
import "./detail.styl";

const AirportDetail = ({ data }) => {
  const props = data.airportsJson;
  const metadata = data.site.siteMetadata;
  const srcSetLines = data.detailImage.sizes.srcSet
    .replace(/\n/g, "")
    .split(",")
    .reverse()
    .map(line => line.split(" "))
    .map(tuple => [tuple[0], tuple[1].replace("w", "")]);
  const backgroundImages = srcSetLines.map(tuple => (
    <style key={tuple[0]}>{`
    @media only screen ${
      tuple[1] > 1240 ? "" : "and (max-width: " + tuple[1] + "px)"
    } {
      .detail {
        background-image: url(${tuple[0]});
      }
    }
  `}</style>
  ));
  return (
    <section className="detail">
      <Helmet>
        <title>
          Airport Codes - {props.id.toUpperCase()} -{" "}
          {props.nameEnglish || props.name}
        </title>
        <meta name="description" content={props.description} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={metadata.baseUrl + props.fields.canonical}
        />
        <meta
          property="og:image"
          content={metadata.baseUrl + srcSetLines[0][0]}
        />
        <meta
          property="og:title"
          content={`${props.id.toUpperCase()} - ${props.nameEnglish ||
            props.name} - Airport Codes`}
        />
        <meta property="og:description" content={props.description} />
        <meta name="twitter:card" content="summary" />
        <style>
          {`
          @media only screen {
            .detail {
              background-image: url(${data.detailImage.sizes.base64})
            }
          }
          `}
        </style>
        {backgroundImages}
      </Helmet>
      <Link className="overlay" to="/" />
      <div className="container">
        <article className="detail-info">
          <nav>
            <Link to="/airports/random" className="random">
              Random Airport
            </Link>
            <Link to="/" className="close-detail">
              Close
            </Link>
          </nav>
          <h1>{props.id}</h1>
          <h2>{props.name}</h2>
          <h3>
            <span className="city">{props.city}</span>
            <span className="state">{props.stateShort}</span>
            <span className="country">{props.country}</span>
          </h3>
          <ReactMarkdown className="description" source={props.description} />
          <footer className="social">
            <a
              className="twitter"
              href={`https://twitter.com/intent/tweet?url=${metadata.baseUrl +
                props.fields
                  .canonical}&text=Making sense of those three-letter airport codes. ${props.id.toUpperCase()}`}
            >
              Share on <span>Twitter</span>
            </a>
            <a
              className="facebook"
              href={`https://www.facebook.com/sharer/sharer.php?u=${metadata.baseUrl +
                props.fields.canonical}`}
            >
              Share on <span>facebook</span>
            </a>
          </footer>
        </article>
        <Link className="back" to="/">
          Airport Codes
        </Link>
        <footer className="photo-credit">
          photo by <a href={props.imageCreditLink}>{props.imageCredit}</a>
        </footer>
      </div>
    </section>
  );
};

export default AirportDetail;

export const query = graphql`
  query AirportDetailQuery($slug: String!) {
    airportsJson(fields: { slug: { eq: $slug } }) {
      city
      city2
      country
      description
      id
      imageCredit
      imageCreditLink
      name
      nameEnglish
      fields {
        canonical
        slug
      }
    }
    site {
      siteMetadata {
        baseUrl
      }
    }
    detailImage: imageSharp(id: { regex: $slug }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
