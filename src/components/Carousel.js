import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { UncontrolledCarousel } from "reactstrap";
import "./css/carousel.scss";

const Carousel = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            childImageSharp {
              fluid {
                src
                originalName
              }
            }
          }
        }
      }
    }
  `);
  const items = data.allFile.edges.map((edge, i) => ({
    src: edge.node.childImageSharp.fluid.src,
    altText: edge.node.childImageSharp.fluid.originalName,
    header: "Shehrvancouver",
    key: i,
  }));
  return (
    <div className="carousel-container">
      <UncontrolledCarousel items={items} />
    </div>
  );
};

export default Carousel;
