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
import JobList from "../../components/JobList";
import AddNewJob from "../../components/AddNewJob";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setloading] = useState(false);
  const [addNewJob, setAddNewJob] = useState(false);

  const editJob = async (job) => {
    setloading(true);
    await axios.post(
      "https://shehrvancouver.netlify.app/.netlify/functions/jobs",
      {
        ...job,
      }
    );
    setloading(false);
  };
  const deleteJob = async (job) => {
    if (window.confirm(`Are you sure you want to delete ${job.name}?`)) {
      await axios.delete(
        "https://shehrvancouver.netlify.app/.netlify/functions/jobs",
        { id: job._id }
      );
    }
  };
  const addJob = async (job) => {
    setloading(true);
    try {
      await axios.post(
        "https://shehrvancouver.netlify.app/.netlify/functions/jobs",
        {
          ...job,
        }
      );
    } catch (e) {}
    setloading(false);
  };

  const toggleAddNewJob = () => {
    setAddNewJob(!addNewJob);
  };

  useEffect(() => {
    setloading(true);
    const getData = async () => {
      const { data } = await axios.get(
        `https://shehrvancouver.netlify.app/.netlify/functions/jobs?page=${pageNum}`
      );
      setTotalPages(data.pages);
      setPageNum(data.page);
      setJobs([...data.jobs]);
    };
    getData();
    setloading(false);
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
            <Button color="info" onClick={toggleAddNewJob}>
              Add new
            </Button>
          </div>

          {jobs.length > 0 ? (
            <Row>
              <JobList
                jobs={jobs}
                admin
                editJob={editJob}
                deleteJob={deleteJob}
              />
            </Row>
          ) : (
            <h1>Sorry, no jobs found come back later</h1>
          )}
          {addNewJob && (
            <AddNewJob
              jobs={jobs}
              addJob={addJob}
              toggleAddNewJob={toggleAddNewJob}
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

export default Jobs;
