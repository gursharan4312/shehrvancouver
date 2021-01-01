import React, { useState, useEffect } from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import axios from "axios";
import { Helmet } from "react-helmet";

function Allconfessions() {
  const [confessions, setConfessions] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    const getData = async () => {
      const { data } = await axios.get(
        `https://shehrvancouver.netlify.app/.netlify/functions/confessions?page=${pageNum}`
      );
      setTotalPages(data.pages);
      setConfessions([...data.confessions]);
    };
    getData();
    setloading(false);
  }, [pageNum]);

  return (
    <Container className="py-4">
      <Helmet>
        <link rel="stylesheet" href="/static/adminFiles/bootstrap.min.css" />
        <link rel="stylesheet" href="/static/adminFiles/admin.css" />
      </Helmet>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>All Confessions</h1>
          <ListGroup flush style={{ background: "#fff" }}>
            {confessions.length === 0 && (
              <ListGroupItem>
                <h1>
                  <strong>No Confession Found</strong>
                </h1>
              </ListGroupItem>
            )}
            {confessions.map((confession) => (
              <ListGroupItem key={confession._id} className="my-4 py-4">
                {confession.message}
              </ListGroupItem>
            ))}
          </ListGroup>
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

export default Allconfessions;
