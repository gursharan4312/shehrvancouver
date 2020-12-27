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
import AddNewJob from "./AddNewJob";
import JobDetails from "./JobDetails";

function JobList({ jobs, admin = false, editJob, deleteJob }) {
  const [detailJobIndex, setDetailJobIndex] = useState(-1);
  const [editJobIndex, setEditJobIndex] = useState(-1);
  return (
    <>
      {jobs.map((job, i) => (
        <Col key={i} sm={8} md={6} className="mx-auto my-1">
          <Card>
            <CardBody>
              <CardTitle tag="h5">
                <strong>{job.name}</strong>
              </CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                {job.pay && `$${job.pay}`}
              </CardSubtitle>
              <CardText>{job.description.substr(0, 40)} . . . .</CardText>
              <div className="d-flex justify-content-between align-items-center">
                <Button color="info" onClick={() => setDetailJobIndex(i)}>
                  Details
                </Button>
                {admin && (
                  <Button color="info" onClick={() => setEditJobIndex(i)}>
                    Edit
                  </Button>
                )}
                {admin && <Button color="danger">Delete</Button>}
              </div>
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
      {admin && editJobIndex !== -1 && (
        <AddNewJob
          jobDetails={jobs[editJobIndex]}
          editJob={editJob}
          toggleAddNewJob={() => setEditJobIndex(-1)}
        />
      )}
    </>
  );
}

export default JobList;
