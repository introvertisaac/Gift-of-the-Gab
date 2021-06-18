import React from "react";
import Card from 'react-bootstrap/Card';
import "./Dashboard.css";
import ProgressBar from 'react-bootstrap/ProgressBar'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const dashboard=()  => {
  return(<>
<div className="CSS">
  <h3>Hey, Welcome back!</h3>
<center>
  <button type="button" class="btn btn-circle btn-xl">
   Sun</button>
  <button type="button" class="btn btn-circle btn-xl">
   Mon</button>
  <button type="button" class="btn btn-circle btn-xl">
   Tu</button>
  <button type="button" class="btn btn-circle btn-xl">
   Wed</button>
  <button type="button" class="btn btn-circle btn-xl">
   Thu</button>
  <button type="button" class="btn btn-circle btn-xl">
   Fri</button>
  <button type="button" class="btn btn-circle btn-xl">
   Sat</button>
</center>
<div className="card">
<Row>
<Col>
<Card>
  <Card.Body>
    <Card.Title>Pronounciation</Card.Title>
    <Card.Text>
    <ProgressBar animated now={45} />
    </Card.Text>
    <br></br>
    <Card.Link href="#">View Next</Card.Link>
  </Card.Body>
</Card>
</Col>

<Col>
<Card>
  <Card.Body>
    <Card.Title>Phonetics</Card.Title>
    <Card.Text>
    <ProgressBar animated now={20} />
    </Card.Text>
    <br></br>
    <Card.Link href="#">View Next</Card.Link>
  </Card.Body>
</Card>
</Col>

<Col>
<Card>
  <Card.Body>
    <Card.Title>Recitation</Card.Title>
    <Card.Text>
    <ProgressBar animated now={80} />
    </Card.Text>
    <br></br>
    <Card.Link href="#">View Next</Card.Link>
  </Card.Body>
</Card>
</Col>
</Row>
</div>
</div>
</>
  );
};

export default dashboard;