import React from "react";
import Card from 'react-bootstrap/Card';
import "./Dashboard.css";
import ProgressBar from 'react-bootstrap/ProgressBar'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";

const Dashboard = ()  => {

  const [weekstreak, setWeekstreak] = useState([]);
  const { id } = useParams();

  var active = false
  var today = new Date();
  const fday = today.getDay();
  const ftoday = JSON.stringify(today).slice(1,11);
  console.log("Date", ftoday, "Day", fday)

  console.log(id)
  useEffect(() => {
    console.log("load weekstreak")
    loadWeekstreak();
  }, []);

  useEffect(() => {
    console.log("toggle")
    toggle();
  }, []);

  const loadWeekstreak = async () => {
    const result = await axios.get(`http://127.0.0.1:8000/api/weekstreak/${id}`);
    setWeekstreak(result.data);
    // weekstreak.forEach(function(item) {
    //   item.date_time = item.date_time.slice(0,10)
    //   console.log(item.date_time)
    //   if (item.date_time === ftoday) {
    //     console.log("")
    //     active = true;
    //     console.log(active)
    //   }
    // });
  }

  console.log(weekstreak)

  const toggle = () => {
  console.log("heyy")
   weekstreak.forEach(function(item) {
   item.date_time = item.date_time.slice(0,10)
   console.log(item.date_time)
       if (item.date_time === ftoday) {
        console.log("hey we entered the if")
        active = true;
        console.log(active)
       }
    });
   };

  console.log(weekstreak)
  console.log(active)

  var week = {};
  week.fday = active;

  return(<>

<div className="CSS">
  <h3>Hey, Welcome back!</h3>
<center>
  <button style={{backgroundColor: active? "#095a9d" : "#001457"}} type="button" id="1" className="btn btn-circle btn-xl">Mon</button>
  <button type="button" id="2" className="btn btn-circle btn-xl">Tue</button>
  <button type="button" id="3" className="btn btn-circle btn-xl">Wed</button>
  <button type="button" id="4" className="btn btn-circle btn-xl">Thu</button>
  <button type="button" id="5" className="btn btn-circle btn-xl">Fri</button>
  <button type="button" id="6" className="btn btn-circle btn-xl">Sat</button>
  <button type="button" id="7" className="btn btn-circle btn-xl">Sun</button>
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


export default Dashboard;