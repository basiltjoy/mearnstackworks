import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { card, Col, Row, Image, ListGroup } from "react-bootstrap";

function RestaurantDetails() {
  const [data, setData] = useState([]);

  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      await fetch("/restaurants.json")
        .then((res) => res.json())
        .then((data) => setData(data.restaurants));
    };
    fetchData();
  }, []);

  console.log(data);
  //   console.log(params.id)
  const details = data.find((i) => i.id == params.id);

  return (
    <>
      <Link className="btn btn-outline-dark mt-2 mx-3  btn-sm " to="/">
        Back
      </Link>
      {details ? (
        <Row className="my-4 mx-3">
          <Col md={3}>
            <Image
              className="img"
              src={details.photograph}
              alt={details.name}
            ></Image>
          </Col>
          <Col md={5}>
            <h2>
              {details.name} <br></br> {details.neighborhood}
            </h2>
            <h2>Cuisine: {details.cuisine_type}</h2>
            <ListGroup>
              <p>{details.address}</p>
            </ListGroup>
            <br></br>
          </Col>
           <h1>Customer Feedbacks</h1>
          <ListGroup>
            Customer Name:<h5>{details.reviews[0].name}</h5>
            Customer Review:<strong>{details.reviews[0].comments}</strong>
          </ListGroup>
          <ListGroup>
            Customer Name:<h5>{details.reviews[1].name}</h5>
            Customer Review:<strong>{details.reviews[0].comments}</strong>
          </ListGroup>
          <Col className="mx-5 mt-2">
            <h3>Operating Hours</h3>
            <p>Monday: {details.operating_hours.Monday}</p>
            <p>Tuesday: {details.operating_hours.Tuesday}</p>
            <p>Wednesday: {details.operating_hours.Wednesday}</p>
            <p>Thursday: {details.operating_hours.Thursday}</p>
            <p>Friday: {details.operating_hours.Friday}</p>
            <p>Satday: {details.operating_hours.Satday}</p>
            <p>Sunday: {details.operating_hours.Sunday}</p>
          </Col>
        </Row>
      ) : null}
    </>
  );
}

export default RestaurantDetails;
