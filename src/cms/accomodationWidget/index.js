import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Button,
  // ListGroup,
  // ListGroupItem,
  // Pagination,
  // PaginationItem,
  // PaginationLink,
} from "reactstrap";
import axios from "axios";
import { Helmet } from "react-helmet";
import AccomodationList from "../../components/AccomodationList";
import AddNewAccomodation from "../../components/AddNewAccomodation";

function Accomodations() {
  const [accomodations, setAccomodations] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setloading] = useState(false);
  const [addNewAccomodation, setAddNewAccomodation] = useState(false);

  const editAccomodation = () => {};
  const deleteAccomodation = () => {};
  const addAccomodation = () => {};

  const toggleAddNewAccomodation = () => {
    setAddNewAccomodation(!addNewAccomodation);
  };

  useEffect(() => {
    setloading(true);
    const getData = async () => {
      const { data } = await axios.get(
        `https://shehrvancouver.netlify.app/.netlify/functions/accomodations?page=${pageNum}`
      );
      setTotalPages(data.pages);
      setAccomodations([...data.accomodations]);
    };
    getData();
    setloading(false);
  }, [pageNum]);

  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="/static/adminFiles/admin.css" />
        <link rel="stylesheet" href="/static/adminFiles/bootstrap.min.css" />
        <link rel="stylesheet" href="/static/adminFiles/jobDetails.css" />
        <link rel="stylesheet" href="/static/adminFiles/admin.css" />
      </Helmet>
      <Container
        className="py-5 position-relative"
        style={{ minHeight: "80vh" }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="mb-3">List of jobs:</h1>
          <Button color="info" onClick={toggleAddNewAccomodation}>
            Add new
          </Button>
        </div>

        {accomodations.length > 0 ? (
          <Row>
            <AccomodationList
              accomodations={accomodations}
              admin
              editAccomodation={editAccomodation}
              deleteAccomodation={deleteAccomodation}
            />
          </Row>
        ) : (
          <h1>Sorry, no accomodations found come back later</h1>
        )}
        {addNewAccomodation && (
          <AddNewAccomodation
            accomodations={accomodations}
            addAccomodation={addAccomodation}
            toggleAddNewAccomodation={toggleAddNewAccomodation}
          />
        )}
      </Container>
    </>
  );
}

export default Accomodations;
