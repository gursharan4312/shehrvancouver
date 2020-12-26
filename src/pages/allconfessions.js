import React, { useState, useEffect } from "react";
import { Col, Container, ListGroup, ListGroupItem } from "reactstrap";
import Layout from "../components/Layout";
import axios from "axios";

function Allconfessions() {
  const [confessions, setConfessions] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `https://shehrvancouver.netlify.app/.netlify/functions/confessions?page=${pageNum}`
      );
      setTotalPages(data.pages);
      setConfessions([...data.confessions]);
    };
    getData();
  }, []);

  return (
    <Layout>
      <Container className="py-4">
        <h1>All Confessions</h1>
        <ListGroup flush style={{ background: "#fff" }}>
          {confessions.map((confession) => (
            <ListGroupItem key={confession._id} className="my-4 py-4">
              {confession.message}
            </ListGroupItem>
          ))}
        </ListGroup>
      </Container>
    </Layout>
  );
}

export default Allconfessions;
