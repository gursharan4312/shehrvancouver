import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import JobList from "../components/JobList";
import {
  Container,
  Row,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";

function Jobs({ location }) {
  // const jobs = [
  //   {
  //     name: "Job 1",
  //     description: "This is the description of first job",
  //     pay: 12,
  //     location: "surrey",
  //     email: "sample@example.com",
  //   },
  //   {
  //     name: "Job 2",
  //     description: "This is the description of first job",
  //     pay: 12,
  //     location: "surrey",
  //     email: "sample@example.com",
  //   },
  //   {
  //     name: "Job 3",
  //     description:
  //       "This is the description of first job This is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first job",
  //     pay: 12,
  //     location: "surrey",
  //     email: "sample@example.com",
  //   },
  // ];
  const [jobs, setJobs] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  useEffect(() => {
    let page = location.search ? location.search.split("=")[1] : 1;
    setPageNum(page);
    const getData = async () => {
      const { data } = await axios.get(
        `https://shehrvancouver.netlify.app/.netlify/functions/jobs?page=${page}`
      );
      setTotalPages(data.pages);
      setPageNum(data.page);
      setJobs([...data.jobs]);
    };
    getData();
  }, [location]);
  return (
    <Layout>
      <Container
        className="py-5 position-relative"
        style={{ minHeight: "80vh" }}
      >
        {jobs ? (
          <>
            <h1 className="mb-3">List of jobs:</h1>
            <Row>
              <JobList jobs={jobs} />
            </Row>
            {totalPages > 1 && (
              <Pagination aria-label="Page navigation" className="mt-5">
                <PaginationItem disabled={pageNum <= 1}>
                  <PaginationLink first href="/jobs?page=1" />
                </PaginationItem>
                <PaginationItem disabled={pageNum <= 1}>
                  <PaginationLink previous href={`/jobs?page=${pageNum - 1}`} />
                </PaginationItem>
                {[...Array(totalPages).keys()].map((page) => (
                  <PaginationItem key={page + 1} active={pageNum - 1 === page}>
                    <PaginationLink href={`/jobs?page=${page + 1}`}>
                      {page + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem disabled={pageNum >= totalPages}>
                  <PaginationLink next href={`/jobs?page=${pageNum + 1}`} />
                </PaginationItem>
                <PaginationItem disabled={pageNum >= totalPages}>
                  <PaginationLink last href={`/jobs?page=${totalPages}`} />
                </PaginationItem>
              </Pagination>
            )}
          </>
        ) : (
          <h1>Sorry, no jobs found come back later</h1>
        )}
      </Container>
    </Layout>
  );
}

export default Jobs;
