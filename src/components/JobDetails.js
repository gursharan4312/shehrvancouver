import React from "react";
import { Button, Container, ListGroup, ListGroupItem } from "reactstrap";
import "./css/jobDetails.scss";

function JobDetails({ job, setDetailJobIndex }) {
  const { name, description, pay, location, email, phoneNumber } = job;

  return (
    <Container className="jobdetails_container">
      <ListGroup flush className=" py-2 mt-4 ">
        <ListGroupItem className=" overflow-auto">
          <Button className="mb-4" onClick={() => setDetailJobIndex(-1)}>
            back
          </Button>
          <h2>
            <strong>{name}</strong>
          </h2>
          {pay && <p> {`Pay : $${pay}`}</p>}
          {location && <p> {`Location : ${location}`}</p>}
          <div>
            <h5>Contact Details:</h5>
            {email && (
              <p>
                Email: <a href={`mailto:${email}`}>{email}</a>
              </p>
            )}
            {phoneNumber && <p>Phone Number: {phoneNumber}</p>}
          </div>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </ListGroupItem>
      </ListGroup>
    </Container>
  );
}

export default JobDetails;
