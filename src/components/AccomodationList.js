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
import AddNewAccomodation from "./AddNewAccomodation";

function AccomodationList({
  accomodations,
  editAccomodation,
  deleteAccomodation,
  admin,
}) {
  const [detailAccomodationIndex, setDetailAccomodationIndex] = useState(-1);
  const [editAccomodationIndex, setEditAccomodationIndex] = useState(-1);
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
                {accomodation.description &&
                  accomodation.description.substr(0, 40)}{" "}
                . . . .
              </CardText>
              <div className="d-flex justify-content-between align-items-center">
                <Button
                  color="info"
                  onClick={() => setDetailAccomodationIndex(i)}
                >
                  Details
                </Button>
                {admin && (
                  <Button
                    color="info"
                    onClick={() => setEditAccomodationIndex(i)}
                  >
                    Edit
                  </Button>
                )}
                {admin && (
                  <Button
                    color="danger"
                    onClick={() => deleteAccomodation(accomodation)}
                  >
                    Delete
                  </Button>
                )}
              </div>
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
      {admin && editAccomodationIndex !== -1 && (
        <AddNewAccomodation
          accomodationDetails={accomodations[editAccomodationIndex]}
          editAccomodation={editAccomodation}
          toggleAddNewAccomodation={() => setEditAccomodationIndex(-1)}
        />
      )}
    </>
  );
}

export default AccomodationList;
