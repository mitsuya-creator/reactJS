import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import AEU from "../../../assets/AsEverythingUnfolds.jpg"


function Home() {
  return (
    <Card className="body-card mx-2 my-1">
      <Card.Img variant="top" src={AEU} />
      <Card.Body>
        <Card.Title>As Everything Unfolds</Card.Title>
        <Card.Text>
          As Everything Unfolds ist eine britische Rockband aus High Wycombe, Buckinghamshire, England.Wikipedia (DE)
        </Card.Text>
        <Button variant="primary">
          <a href="https://www.aseverythingunfolds.com/" className="text-white text-decoration-none">Website</a>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Home;