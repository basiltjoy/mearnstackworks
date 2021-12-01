import React from "react";
import { Card, Col } from "react-bootstrap";

function Items() {
  return (
    <div>
      <Card>
        <Col sm={5} >
          <img
            src="https://images.unsplash.com/photo-1526318896980-cf78c088247c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
            className="w-50 h-40"
          ></img>
        </Col>
      </Card>
    </div>
  );
}

export default Items;
