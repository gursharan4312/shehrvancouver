import React, { useState } from "react";
import {
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import JobDetails from "./JobDetails";

function JobList({ jobs }) {
  const [detailJobIndex, setDetailJobIndex] = useState(-1);
  return (
    <>
      {jobs.map((job, i) => (
        <Col key={i} sm={8} md={4} lg={3} className="mx-auto my-1">
          <Card>
            <CardBody>
              <CardTitle tag="h5">
                <strong>{job.name}</strong>
              </CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                {job.pay && `$${job.pay}`}
              </CardSubtitle>
              <CardText>{job.description.substr(0, 40)} . . . .</CardText>
              <Button color="info" onClick={() => setDetailJobIndex(i)}>
                Details
              </Button>
            </CardBody>
          </Card>
        </Col>
      ))}
      {detailJobIndex !== -1 && (
        <JobDetails
          job={jobs[detailJobIndex]}
          setDetailJobIndex={setDetailJobIndex}
        />
      )}
    </>
  );
}

export default JobList;
