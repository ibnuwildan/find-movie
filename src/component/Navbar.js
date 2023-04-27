import { useEffect, useState } from "react";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { getMovieList, searchMovie } from "../api";

const Navigation = () => {
  return (
    <div>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand>MOVIE MANIA</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link>Trending</Nav.Link>
            <Nav.Link>Genre</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
