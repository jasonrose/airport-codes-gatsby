import "./about.styl";
import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Link from "gatsby-link";

const About = ({ data }) => {
  const airportCount = data.allAirportsJson.edges.length;
  const countries = {};
  const photographers = {};
  for (let edge of data.allAirportsJson.edges) {
    countries[edge.node.country] = true;
    photographers[edge.node.imageCredit] = true;
  }
  const countryCount = Object.keys(countries).length;
  const photographerCount = Object.keys(photographers).length;
  return (
    <section className="about site-info">
      <Helmet>
        <title>Airport Codes - About</title>
      </Helmet>
      <div className="overlay" />
      <div className="container">
        <div className="content">
          <h1>About</h1>
          <p>
            Every airport has a unique three-letter{" "}
            <a href="http://en.wikipedia.org/wiki/International_Air_Transport_Association">
              IATA
            </a>{" "}
            code. Some make sense if you know the city or the name of the
            airport and others, well, what the heck?
          </p>
          <p>
            Turns out there’s usually a reasonable explanation. Knowing what
            each IATA code stands for isn’t super useful, but it sure can be
            fun.
          </p>
          <p>
            This site was designed and built by{" "}
            <a href="https://twitter.com/lynnandtonic">Lynn Fisher</a> and{" "}
            <a href="https://twitter.com/nickcrohn">Nick Crohn</a>.
          </p>{" "}
          <p>
            Photos generously provided by the Flickr and Wikimedia communities
            who license their work under Creative Commons.
          </p>
          <hr />
          <p className="quote">“Hey, you left [my airport] off the list!”</p>
          <Link className="btn" to="/contribute">
            Contribute
          </Link>
          <hr />
          <h3>airportcod.es Status</h3>
          <div className="stats">
            <p>
              <span className="stat">{airportCount}</span>
              <span> airports</span>
            </p>
            <p>
              <span>from </span>
              <span className="stat">{countryCount}</span>
              <span> countries</span>
            </p>
            <p>
              <span>with photos by </span>
              <span className="stat">{photographerCount}</span>
              <span> photographers</span>
            </p>
          </div>
          <hr />
          <div className="footnote">
            <p>
              All photographs are from Flickr & Wikipedia, under Creative
              Commons licenses, or with permission from the photographer.
            </p>
            <p>
              Sources: <a href="http://www.wikipedia.org/">wikipedia.org</a>,{" "}
              <a href="http://www.skygod.com/asstd/abc.html"> skygod.com</a>,{" "}
              <a href="http://www.city-data.com/forum/toronto/2177590-why-airport-code-toronto-yyz.html">
                citydata.com
              </a>,{" "}
              <a href="http://abcnews.go.com/Travel/history-airport-codes-logic-letter-codes/story?id=11684406&singlePage=true">
                abcnews.com
              </a>,{" "}
              <a href="http://www.quora.com/Why-do-some-airport-codes-in-India-start-with-IX">
                quora.com
              </a>,{" "}
              <a href="http://www.andalucia.com/travel/airports/malaga/fascinating-facts.htm">
                andalucia.com
              </a>,{" "}
              <a href="http://hawaii.gov/ito/airport-information/faq">
                hawaii.gov
              </a>,{" "}
              <a href="http://generalaviationnews.com/">
                generalaviationnews.com
              </a>, <a href="http://www.aspenairport.com/"> aspenairport.com</a>,{" "}
              <a href="http://www.houghtoncounty.org/about-history.php">
                houghtoncounty.org
              </a>,{" "}
              <a href="http://www.blogsouthwest.com/every-code-tells-a-story/">
                blogsouthwest.com
              </a>,{" "}
              <a href="http://www.sanyaairport.com/autoweb/autoweb/secondpage/sanya_en/about_the_airport.html">
                sanyaairport.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <Link className="back" to="/">
        Airport Codes
      </Link>
    </section>
  );
};

export default About;

export const query = graphql`
  query AirportMetricsQuery {
    allAirportsJson {
      edges {
        node {
          country
          imageCredit
        }
      }
    }
  }
`;
