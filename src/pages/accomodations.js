import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import AccomodationList from "../components/AccomodationList";
import {
  Button,
  Container,
  Row,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import axios from "axios";

function Accomodations({ location }) {
  // const accomodations = [
  //   {
  //     address: "11840 96 Ave",
  //     description: "This is the description of first job",
  //     rent: 2200,
  //     rooms: 4,
  //     furnished: "no",
  //     email: "sample@example.com",
  //   },
  //   {
  //     address: "11840 96 Ave",
  //     description: "This is the description of first job",
  //     rent: 2200,
  //     rooms: 4,
  //     furnished: "no",
  //     email: "sample@example.com",
  //   },
  //   {
  //     address: "11840 96 Ave",
  //     description: "This is the description of first job",
  //     rent: 2200,
  //     rooms: 4,
  //     furnished: "no",
  //     email: "sample@example.com",
  //   },
  //   {
  //     address: "11840 96 Ave",
  //     description: "This is the description of first job",
  //     rent: 2200,
  //     rooms: 4,
  //     furnished: "no",
  //     email: "sample@example.com",
  //   },
  // ];
  const [accomodations, setAccomodations] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  useEffect(() => {
    let page = location.search ? location.search.split("=")[1] : 1;
    setPageNum(page);
    const getData = async () => {
      const { data } = await axios.get(
        `https://shehrvancouver.netlify.app/.netlify/functions/accomodations?page=${page}`
      );
      setTotalPages(data.pages);
      setPageNum(data.page);
      setAccomodations([...data.accomodations]);
    };
    getData();
  }, [location]);
  return (
    <Layout>
      <Container
        className="py-5 position-relative"
        style={{ minHeight: "80vh" }}
      >
        {accomodations.length > 0 ? (
          <>
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <h1 className="mb-3">List of accomodations:</h1>

              <Button color="info">Post ad</Button>
            </div>

            <Row>
              <AccomodationList accomodations={accomodations} />
            </Row>
            {totalPages > 1 && (
              <Pagination aria-label="Page navigation" className="mt-5">
                <PaginationItem disabled={pageNum <= 1}>
                  <PaginationLink first href="/accomodations?page=1" />
                </PaginationItem>
                <PaginationItem disabled={pageNum <= 1}>
                  <PaginationLink
                    previous
                    href={`/accomodations?page=${pageNum - 1}`}
                  />
                </PaginationItem>
                {[...Array(totalPages).keys()].map((page) => (
                  <PaginationItem key={page + 1} active={pageNum - 1 === page}>
                    <PaginationLink href={`/accomodations?page=${page + 1}`}>
                      {page + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem disabled={pageNum >= totalPages}>
                  <PaginationLink
                    next
                    href={`/accomodations?page=${pageNum + 1}`}
                  />
                </PaginationItem>
                <PaginationItem disabled={pageNum >= totalPages}>
                  <PaginationLink
                    last
                    href={`/accomodations?page=${totalPages}`}
                  />
                </PaginationItem>
              </Pagination>
            )}
          </>
        ) : (
          <h1>Sorry, no accomodations found please come back later</h1>
        )}
      </Container>
    </Layout>
  );
}

export default Accomodations;
