import React from "react";
import { Button, Container, ListGroup, ListGroupItem } from "reactstrap";
import "./css/jobDetails.scss";

function AccomodationDetails({ accomodation, setDetailAccomodationIndex }) {
  const {
    address,
    description,
    rent,
    rooms,
    furnished,
    email,
    phoneNumber,
  } = accomodation;

  return (
    <Container className="jobdetails_container">
      <ListGroup flush className=" py-2 mt-4 ">
        <ListGroupItem className=" overflow-auto">
          <Button
            className="mb-4"
            onClick={() => setDetailAccomodationIndex(-1)}
          >
            back
          </Button>
          <h2>
            <strong>{address}</strong>
          </h2>
          {rooms && <p> {`Rooms : ${rooms}`}</p>}
          {rent && <p> {`Rent : ${rent}`}</p>}
          {furnished && <p> {`Furnished : ${furnished}`}</p>}
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

export default AccomodationDetails;
