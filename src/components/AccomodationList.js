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
import AccomodationDetails from "./AccomodationDetails";

function AccomodationList({ accomodations }) {
  const [detailAccomodationIndex, setDetailAccomodationIndex] = useState(-1);
  return (
    <>
      {accomodations.map((accomodation, i) => (
        <Col key={i} sm={8} md={4} lg={3} className="mx-auto my-1">
          <Card>
            <CardBody>
              <CardTitle tag="h5">
                <strong>{accomodation.address}</strong>
              </CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                <p>
                  {accomodation.rooms && `${accomodation.rooms} rooms`}
                  {accomodation.rent && `- $${accomodation.rent}`}
                </p>
              </CardSubtitle>
              <CardText>
                {accomodation.description.substr(0, 40)} . . . .
              </CardText>
              <Button
                color="info"
                onClick={() => setDetailAccomodationIndex(i)}
              >
                Details
              </Button>
            </CardBody>
          </Card>
        </Col>
      ))}
      {detailAccomodationIndex !== -1 && (
        <AccomodationDetails
          accomodation={accomodations[detailAccomodationIndex]}
          setDetailAccomodationIndex={setDetailAccomodationIndex}
        />
      )}
    </>
  );
}

export default AccomodationList;
