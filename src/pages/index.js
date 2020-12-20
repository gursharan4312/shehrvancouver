import React from "react";
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import { Col, Container, Rows } from "reactstrap";

function index() {
  return (
    <Layout>
      <Container fluid>
        <Carousel />
      </Container>
    </Layout>
  );
}

export default index;
