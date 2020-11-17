import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';   
import Button from 'react-bootstrap/Button';


import Aux from '../../hoc/Aux/Aux';
const navbar = () =>(
  
<Aux>
  <Navbar bg="light" variant="light">
  <Container>
    <Navbar.Brand as={Link} to="/">CoderBroz</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/content">Content</Nav.Link>
      <Nav.Link as={Link} to="/team">Team</Nav.Link>
      <Nav.Link as={Link} to="/payment">Payment</Nav.Link>
    </Nav>
    <Form inline> 
      <Button variant="success" >Login</Button>
    </Form>
    </Container>
  </Navbar>

 
</Aux>

);


export default navbar;