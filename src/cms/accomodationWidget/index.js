import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Button,
  Pagination,
  PaginationItem,
  PaginationLink,
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

  const editAccomodation = async (accomodation) => {
    setloading(true);
    await axios.post(
      "https://shehrvancouver.netlify.app/.netlify/functions/accomodations",
      {
        ...accomodation,
      }
    );
    setloading(false);
  };
  const deleteAccomodation = async (accomodation) => {
    if (
      window.confirm(`Are you sure you want to delete ${accomodation.address}?`)
    ) {
      await axios.delete(
        "https://shehrvancouver.netlify.app/.netlify/functions/accomodations",
        { id: accomodation._id }
      );
      alert("It has been deleted");
      getData();
    }
  };
  const addAccomodation = async (accomodation) => {
    setloading(true);
    try {
      await axios.post(
        "https://shehrvancouver.netlify.app/.netlify/functions/accomodations",
        {
          ...accomodation,
        }
      );
    } catch (e) {}
    setloading(false);
  };

  const toggleAddNewAccomodation = () => {
    setAddNewAccomodation(!addNewAccomodation);
  };
  const getData = async () => {
    setloading(true);
    const { data } = await axios.get(
      `https://shehrvancouver.netlify.app/.netlify/functions/accomodations?page=${pageNum}`
    );
    setTotalPages(data.pages);
    setPageNum(data.page);
    setAccomodations([...data.accomodations]);
    setloading(false);
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [pageNum]);

  return (
    <Container className="py-5 position-relative" style={{ minHeight: "80vh" }}>
      <Helmet>
        <link rel="stylesheet" href="/static/adminFiles/admin.css" />
        <link rel="stylesheet" href="/static/adminFiles/bootstrap.min.css" />
        <link rel="stylesheet" href="/static/adminFiles/jobDetails.css" />
        <link rel="stylesheet" href="/static/adminFiles/admin.css" />
      </Helmet>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
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
          {totalPages > 1 && (
            <Pagination aria-label="Page navigation" className="mt-5">
              <PaginationItem disabled={pageNum <= 1}>
                <PaginationLink first onClick={() => setPageNum(1)} />
              </PaginationItem>
              <PaginationItem disabled={pageNum <= 1}>
                <PaginationLink
                  previous
                  onClick={() => setPageNum(pageNum - 1)}
                />
              </PaginationItem>
              {[...Array(totalPages).keys()].map((page) => (
                <PaginationItem key={page + 1} active={pageNum - 1 === page}>
                  <PaginationLink onClick={() => setPageNum(page + 1)}>
                    {page + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem disabled={pageNum >= totalPages}>
                <PaginationLink next onClick={() => setPageNum(pageNum + 1)} />
              </PaginationItem>
              <PaginationItem disabled={pageNum >= totalPages}>
                <PaginationLink last onClick={() => setPageNum(totalPages)} />
              </PaginationItem>
            </Pagination>
          )}
        </>
      )}
    </Container>
  );
}

export default Accomodations;
