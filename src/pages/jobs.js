import React from "react";
import Layout from "../components/Layout";
import JobList from "../components/JobList";
import { Container, Row } from "reactstrap";

function Jobs() {
  const jobs = [
    {
      name: "Job 1",
      description: "This is the description of first job",
      pay: 12,
      location: "surrey",
      email: "sample@example.com",
    },
    {
      name: "Job 2",
      description: "This is the description of first job",
      pay: 12,
      location: "surrey",
      email: "sample@example.com",
    },
    {
      name: "Job 3",
      description:
        "This is the description of first job This is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first job",
      pay: 12,
      location: "surrey",
      email: "sample@example.com",
    },
  ];
  return (
    <Layout>
      <Container
        className="py-5 position-relative"
        style={{ minHeight: "80vh" }}
      >
        {jobs ? (
          <>
            <h1 className="mb-3">List of jobs:</h1>
            <Row>
              <JobList jobs={jobs} />
            </Row>
          </>
        ) : (
          <h1>Sorry, no jobs found come back later</h1>
        )}
      </Container>
    </Layout>
  );
}

export default Jobs;
