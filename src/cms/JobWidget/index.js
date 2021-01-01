import React from "react";
import { Helmet } from "react-helmet";
import { Button, Container, Row } from "reactstrap";
import JobList from "../../components/JobList";
import AddNewJob from "../../components/AddNewJob";
export default class JobWidgetControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { jobs: [], addNewJob: false };
  }
  onChange = (event, editor) => {
    //   const data = editor.getData();
    //   this.props.onChange(data);
  };
  addNewJob = (job) => {
    this.setState({
      jobs: [...this.state.jobs, job],
    });
  };
  editJob = (newjob) => {
    this.setState({
      jobs: this.state.jobs.map((job) =>
        job._id === newjob._id ? newjob : job
      ),
    });
  };
  deleteJob = (id) => {
    console.log("delete");
  };
  toggleAddNewJob = () => {
    this.setState({ addNewJob: !this.state.addNewJob });
  };
  componentDidMount() {
    this.setState({
      jobs: [
        {
          name: "Job 1",
          description: "This is the description of first job",
          pay: 12,
          location: "surrey",
          email: "sample@example.com",
        },
        {
          name: "Job 2",
          description: "This is the description of first job",
          pay: 12,
          location: "surrey",
          email: "sample@example.com",
        },
        {
          name: "Job 3",
          description:
            "This is the description of first job This is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first job",
          pay: 12,
          location: "surrey",
          email: "sample@example.com",
        },
      ],
    });
  }

  render() {
    return (
      <>
        <Helmet>
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
            <Button color="info" onClick={this.toggleAddNewJob}>
              Add new job
            </Button>
          </div>

          {this.state.jobs.length > 0 ? (
            <Row>
              <JobList
                jobs={this.state.jobs}
                admin
                editJob={this.editJob}
                deleteJob={this.deleteJob}
              />
            </Row>
          ) : (
            <h1>Sorry, no jobs found come back later</h1>
          )}
          {this.state.addNewJob && (
            <AddNewJob
              addNewJob={this.addNewJob}
              toggleAddNewJob={this.toggleAddNewJob}
            />
          )}
        </Container>
      </>
    );
  }
}
