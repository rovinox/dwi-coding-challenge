import React from 'react';
import {Link} from "react-router-dom"
import {Card} from 'react-bootstrap';


function Home() {
    return (
      <div className="App">
        <Link to="/offer">
          <Card style={{ width: '18rem', margin:"10px" }}>
            
            <Card.Body>
            <Card.Title>Direct Wines</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">challenge #1</Card.Subtitle>
            </Card.Body>
          </Card>
        </Link>
        <Link to="/zipcode">
            <Card style={{ width: '18rem', margin:"10px" }}>
            
            <Card.Body>
            <Card.Title>ZIP code</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">challenge #2</Card.Subtitle>
            </Card.Body>
            </Card>
        </Link>
  
  
      </div>
    )
  }
  
  export default Home;