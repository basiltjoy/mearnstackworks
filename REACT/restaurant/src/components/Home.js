import React from "react";
import "./Home.css";
import { useState } from "react";
import { useEffect } from "react";
import { Col } from "react-bootstrap";
import Restaurants from "./Restaurants";
import Header from "./header";
import { Carousel } from "react-bootstrap";



function Home() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("./restaurants.json")
        .then((res) => res.json())
        .then((data) => setHotels(data.restaurants));
    };
    fetchData();
  }, []);
  console.log("data is:", hotels);

  return (
    <div>
      <Header />
      <h1 className="welcome" style={{ textDecoration: "none" }}>
        Welcome
      </h1>

      <>
        {hotels ? (
          <div>
            {hotels.map((item) => (
              <Col sm={12} md={8} lg={6} xl={2}>
                <Restaurants item={item} />
              </Col>
            ))}
          </div>
        ) : null}
      </>
    </div>
  );
}

export default Home;
