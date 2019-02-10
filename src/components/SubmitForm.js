import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../App.css';

class SubmitForm extends Component {
    render() {
      return (
        <Form style={{width: '600px' , margin: '0 auto'}} netlify>
        <h3>Reserve a Room</h3>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input type="text" name="firstName" id="firstName" placeholder="First Name" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="middleName">Middle Name</Label>
              <Input type="text" name="middleName" id="middleName" placeholder="Middle Name" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <Input type="text" name="lastName" id="lastName" placeholder="Last Name" />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={8}>
          <FormGroup>
            <Label for="emailAddress">Email</Label>
            <Input type="text" name="email" id="emailAddress" placeholder="Email"/>
          </FormGroup>
          </Col>
          <Col md={4}>
          <FormGroup>
            <Label for="phoneNumber">Phone Number</Label>
            <Input type="text" name="phoneNumber" id="phoneNumber" placeholder="phone Number"/>
          </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
          <FormGroup>
          <Label for="checkinDate">Check-in Date</Label>
          <Input
            type="date"
            name="checkinDate"
            id="checkinDate"
            placeholder="Check-in Date"
          />
          </FormGroup>
          </Col>
          <Col md={6}>
          <FormGroup>
          <Label for="checkoutDate">Check-out Date</Label>
          <Input
            type="date"
            name="checkoutDate"
            id="checkoutDate"
            placeholder="Check-out Date"
          />
          </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={4}>
            <FormGroup>
            <Label for="rooms">Number of Rooms</Label>
            <Input type="select" name="rooms" id="rooms">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </Input>
            </FormGroup>
          </Col>

          <Col md={4}>
            <FormGroup>
            <Label for="adults">Number of Adults</Label>
            <Input type="select" name="adults" id="adults">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </Input>
            </FormGroup>
          </Col>

          <Col md={4}>
            <FormGroup>
            <Label for="children">Number of Children</Label>
            <Input type="select" name="children" id="children">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </Input>
            </FormGroup>
          </Col>
          
         </Row>
        <FormGroup>
          <Label for="exampleAddress">Address</Label>
          <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleAddress2">Address 2</Label>
          <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">City</Label>
              <Input type="text" name="city" id="exampleCity"/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleState">State</Label>
              <Input type="text" name="state" id="exampleState"/>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleZip">Zip</Label>
              <Input type="text" name="zip" id="exampleZip"/>
            </FormGroup>  
          </Col>
        </Row>
        <Button>Submit</Button>
        </Form>
      );
    }
  }
  
  export default SubmitForm;