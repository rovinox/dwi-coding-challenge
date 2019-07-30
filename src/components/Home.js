import React from 'react';
import {Link} from "react-router-dom"
import {Card} from 'react-bootstrap';


function Home() {
    return (
      <div className="App">
        <Link to="/offer">
          <Card style={{ width: '18rem', margin:"10px" }}>
            <Card.Img variant="top" src="https://1726es3mqkj32w2p8m21ngvk-wpengine.netdna-ssl.com/wp-content/uploads/2016/01/DWinc_Images_Home.jpg" />
            <Card.Body>
            <Card.Title>Direct Wines</Card.Title>
            </Card.Body>
          </Card>
        </Link>
        <Link>
            <Card style={{ width: '18rem', margin:"10px" }}>
            <Card.Img variant="top" src="https://1726es3mqkj32w2p8m21ngvk-wpengine.netdna-ssl.com/wp-content/uploads/2016/01/DWinc_Images_Home.jpg" />
            <Card.Body>
            <Card.Title>Direct Wines</Card.Title>
            </Card.Body>
            </Card>
        </Link>
  
  
      </div>
    )
  }
  
  export default Home;