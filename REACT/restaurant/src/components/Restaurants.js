import React from "react";
import "./restaurant.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

function Restaurants({ item }) {
  return (
    <>
      <Row>
          <Link style={{ textDecoration: "none" }} to={`restaurantdetails/${item.id}`}>
            {item ? (
              <div className="hotel">
                <Card style={{ width: "18rem" }}>
                  <h1 className="itemname">{item.name}</h1>
                  {<img className="d-block " src={item.photograph}></img>}
                  <p className="neighborhood"> {item.neighborhood}</p>
                </Card>
              </div>
            ) : null}
          </Link>
      </Row>
    </>
  );
}

export default Restaurants;
