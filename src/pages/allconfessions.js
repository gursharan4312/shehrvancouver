import React, { useState, useEffect } from "react";
import {
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import Layout from "../components/Layout";
import axios from "axios";

function Allconfessions({ match }) {
  const [confessions, setConfessions] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `https://shehrvancouver.netlify.app/.netlify/functions/confessions`
      );
      setTotalPages(data.pages);
      setPageNum(data.page);
      setConfessions([...data.confessions]);
    };
    getData();
    console.log(match);
  }, []);

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
            <PaginationLink first href="#" />
          </PaginationItem>
          <PaginationItem disabled={pageNum === 1}>
            <PaginationLink previous href="#" />
          </PaginationItem>
          {[...Array(totalPages).keys()].map((page) => (
            <PaginationItem key={page + 1} active={pageNum === page + 1}>
              <PaginationLink href="#">{page + 1}</PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationLink next href="#" disabled={pageNum >= totalPages} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink last href="#" disabled={pageNum >= totalPages} />
          </PaginationItem>
        </Pagination>
      </Container>
    </Layout>
  );
}

export default Allconfessions;
