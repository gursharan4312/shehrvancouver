import React from "react";
import Layout from "../components/Layout";
import AccomodationList from "../components/AccomodationList";
import { Button, Container, Row } from "reactstrap";

function Accomodations() {
  const accomodations = [
    {
      address: "11840 96 Ave",
      description: "This is the description of first job",
      rent: 2200,
      rooms: 4,
      furnished: "no",
      email: "sample@example.com",
    },
    {
      address: "11840 96 Ave",
      description: "This is the description of first job",
      rent: 2200,
      rooms: 4,
      furnished: "no",
      email: "sample@example.com",
    },
    {
      address: "11840 96 Ave",
      description: "This is the description of first job",
      rent: 2200,
      rooms: 4,
      furnished: "no",
      email: "sample@example.com",
    },
    {
      address: "11840 96 Ave",
      description: "This is the description of first job",
      rent: 2200,
      rooms: 4,
      furnished: "no",
      email: "sample@example.com",
    },
  ];
  return (
    <Layout>
      <Container
        className="py-5 position-relative"
        style={{ minHeight: "80vh" }}
      >
        {accomodations ? (
          <>
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <h1 className="mb-3">List of accomodations:</h1>

              <Button color="info">Post ad</Button>
            </div>

            <Row>
              <AccomodationList accomodations={accomodations} />
            </Row>
          </>
        ) : (
          <h1>Sorry, no houses found please come back later</h1>
        )}
      </Container>
    </Layout>
  );
}

export default Accomodations;
