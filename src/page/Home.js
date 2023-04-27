import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import { getMovieList, searchMovie } from "../api";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
    }
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      <Container className="Movie">
        <div className="titleMovie">
          <h1>FIND YOUR MOVIE MANIA</h1>
        </div>
        <div className="Serch">
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Find Your Movie" className="me-2" aria-label="Search" onChange={({ target }) => search(target.value)} />
          </Form>
        </div>
        <div>
          <Row>
            {popularMovies.map((movie, i) => {
              return (
                <Col>
                  <Card className="CardMovie" key={i}>
                    <Card.Img variant="top" src={`${process.env.REACT_APP_IMG_URL}/${movie.poster_path}`} />
                    <Card.Body>
                      <Card.Text style={{ textAlign: "center", fontSize: "15px" }}>{movie.title}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Home;
