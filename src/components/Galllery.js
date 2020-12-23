import React, { useState, useCallback } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

function Gallery1() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const data = useStaticQuery(graphql`
    query galleryImagesQuery {
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

  const photos = data.allFile.edges.map((edge, i) => ({
    src: edge.node.childImageSharp.fluid.src,
    height: 2,
    width: 3,
  }));
  return (
    <>
      <h1>Gallery</h1>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  );
}

export default Gallery1;
