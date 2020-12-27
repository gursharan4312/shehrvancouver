import React, { useState, useEffect } from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import Layout from "../components/Layout";
import axios from "axios";

function Allconfessions({ location }) {
  const [confessions, setConfessions] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    let page = location.search ? location.search.split("=")[1] : 1;
    setPageNum(page);
    const getData = async () => {
      const { data } = await axios.get(
        `https://shehrvancouver.netlify.app/.netlify/functions/confessions?page=${page}`
      );
      setTotalPages(data.pages);
      setPageNum(data.page);
      setConfessions([...data.confessions]);
    };
    getData();
  }, [location]);

  return (
    <Layout>
      <Container className="py-4">
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
        <Pagination aria-label="Page navigation" className="mt-5">
          <PaginationItem disabled={pageNum === 1}>
            <PaginationLink first href="/allconfessions?page=1" />
          </PaginationItem>
          <PaginationItem disabled={pageNum === 1}>
            <PaginationLink
              previous
              href={`/allconfessions?page=${pageNum - 1}`}
            />
          </PaginationItem>
          {[...Array(totalPages).keys()].map((page) => (
            <PaginationItem key={page + 1} active={pageNum === page + 1}>
              <PaginationLink href={`/allconfessions?page=${page + 1}`}>
                {page + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem disabled={pageNum >= totalPages}>
            <PaginationLink next href={`/allconfessions?page=${pageNum + 1}`} />
          </PaginationItem>
          <PaginationItem disabled={pageNum >= totalPages}>
            <PaginationLink last href={`/allconfessions?page=${totalPages}`} />
          </PaginationItem>
        </Pagination>
      </Container>
    </Layout>
  );
}

export default Allconfessions;
