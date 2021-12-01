import React from "react";
import "./restaurant.css";
import { Link } from "react-router-dom";

function Restaurants({ item }) {
  return (
    <>
      <Link to={`restaurantdetails/${item.id}`}>
        {item ? (
          <p>
            {item.name}
            {<img className="d-block " src={item.photograph}></img>}
          </p>
        ) : null}
      </Link>
    </>
  );
}

export default Restaurants;
