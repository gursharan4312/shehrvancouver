import React, { useState } from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";

function AddNewJob({
  addAccomodation,
  editAccomodation,
  toggleAddNewAccomodation,
  accomodationDetails = {
    address: "",
    rent: "",
    furnished: "",
    email: "",
    phoneNumber: "",
    description: "",
  },
}) {
  const [address, setAddress] = useState(accomodationDetails.name);
  const [rent, setRent] = useState(accomodationDetails.pay);
  const [furnished, setFurnished] = useState(accomodationDetails.location);
  const [email, setEmail] = useState(accomodationDetails.email);
  const [phoneNumber, setPhoneNumber] = useState(
    accomodationDetails.phoneNumber
  );
  const [description, setDescription] = useState(
    accomodationDetails.description
  );
  const submit = (e) => {
    e.preventDefault();
    if (accomodationDetails._id) {
      editAccomodation({
        _id: accomodationDetails._id,
        address,
        rent,
        furnished,
        email,
        phoneNumber,
        description,
      });
    } else {
      addAccomodation({
        address,
        rent,
        furnished,
        email,
        phoneNumber,
        description,
      });
      setAddress("");
      setRent("");
      setFurnished("");
      setEmail("");
      setPhoneNumber("");
      setDescription("");
    }
  };
  return (
    <Container className="jobdetails_container">
      <Button onClick={toggleAddNewAccomodation}>back</Button>
      <Form onSubmit={submit}>
        <FormGroup>
          <Label for="jobName">Address:</Label>
          <Input
            type="text"
            name="address"
            id="jobName"
            placeholder="Enter address here..."
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="payRate">Monthly Rent:</Label>
          <Input
            type="number"
            name="rent"
            id="payRate"
            value={rent}
            onChange={(e) => setRent(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="location">Furnished:</Label>
          <Input
            type="text"
            name="furnished"
            id="location"
            value={furnished}
            onChange={(e) => setFurnished(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email :</Label>
          <Input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="phoneNumber">Phone Number :</Label>
          <Input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="jobDescription">Description</Label>
          <Input
            type="textarea"
            name="description"
            id="jobDescription"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormGroup>
        <Button color="info">Submit</Button>
      </Form>
    </Container>
  );
}

export default AddNewJob;
