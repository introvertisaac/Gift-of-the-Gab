import React from "react";
import Card from 'react-bootstrap/Card';
import "./Dashboard.css";
import ProgressBar from 'react-bootstrap/ProgressBar'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from 'moment'

const Dashboard = ()  => {

  const { id } = useParams();
  let streak = [];
  var week = {};
  // const [active, setActive] = useState(false);
  const [final, setFinal] = useState({});
  var active = false
  var today = new Date();
  var fday = today.getDay();
  const ftoday = JSON.stringify(today).slice(1,11);
  console.log("Date", ftoday, "Day", fday)
 
  console.log(id)
  useEffect(() => {
    loadWeekstreak();
  }, []);
  const loadWeekstreak = async () => {
    const result = await axios.get(`http://127.0.0.1:8000/api/weekstreak/${id}`);
    streak = result.data;
    
      for(let i=0; i<=fday; i++){
        console.log(i)
        console.log("hey entered the for")
        var wdate = moment().subtract('days', fday-i).format('YYYY-MM-DD');
        console.log(wdate)
        console.log(streak)
          streak.forEach(function(item) {
            item.date_time = item.date_time.slice(0,10)
              if (item.date_time === wdate) {
                console.log("hey we entered the if")
                // setActive(true);
                active=true
                week[i] = active;
                console.log("i ",i,"active ",active,"week ",week)
                return;
              }
              else{
                // setActive(false);
                active=false
              }
            });
          // week[i] = active;
        }
      console.log(week)
      setFinal(week)
  }

  console.log(final)
  // var seven = moment().subtract('days', 7).format('YYYY-MM-DD')
  // console.log(seven)
  // week[fday] = active;
  // console.log(week)
  // console.log(active)

  return(<>
<div className="CSS">
  <h3>Hey, Welcome back!</h3>
<center>
  <button style={{backgroundColor: final[0]? "#001457" : "#b2ecfd"}} type="button" id="0" className="btn btn-circle btn-xl">Sun</button>
  <button style={{backgroundColor: final[1]? "#001457" : "#b2ecfd"}} type="button" id="1" className="btn btn-circle btn-xl">Mon</button>
  <button style={{backgroundColor: final[2]? "#001457" : "#b2ecfd"}} type="button" id="2" className="btn btn-circle btn-xl">Tue</button>
  <button style={{backgroundColor: final[3]? "#001457" : "#b2ecfd"}} type="button" id="3" className="btn btn-circle btn-xl">Wed</button>
  <button style={{backgroundColor: final[4]? "#001457" : "#b2ecfd"}} type="button" id="4" className="btn btn-circle btn-xl">Thu</button>
  <button style={{backgroundColor: final[5]? "#001457" : "#b2ecfd"}} type="button" id="5" className="btn btn-circle btn-xl">Fri</button>
  <button style={{backgroundColor: final[6]? "#001457" : "#b2ecfd"}} type="button" id="6" className="btn btn-circle btn-xl">Sat</button>
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

