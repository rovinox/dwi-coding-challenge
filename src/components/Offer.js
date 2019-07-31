import React, { useState, useEffect }  from 'react'
import axios from "axios"
import {Container} from "react-bootstrap"




export default function Offer() {
    const [offers, setOffers] = useState([]);

    useEffect(() => {

       
        
         axios.get("https://www.wsjwine.com/api/offer/0033008").then(response =>{

           setOffers(response.data.response.mainItems)
            
            
        })
        .catch( err =>{
            console.log(err);
        })
        

      },[]);
      const displayOffers = offers.map(offer =>{
          return <div key={offer.product.id}>
                    <p><input type="radio"/> {offer.product.name} <b>${offer.listPrice}</b> <a href="#">view more</a></p> 
                </div>

      })

    return (
        <div>
            <Container style={{display:"flex", alignItems:"center", justifyContent:"space-around", flexWrap:"wrap"}}>
            <div id="pointed-rectangle" className="corner">Step 1</div>
            <h2 style={{color:"red"}}>which case would you like?</h2>
            </Container>
            <hr style={{borderTop: '5px solid red', width:"50%"}}/>
            <Container style={{textAlign:"center", fontSize:"30px"}}>
            <p>Whatevere you choose, we'll add in two bonus Cabs and tho crystal glasses and you'll have the complate package - worth over $$69.99 (puls $19.99 shipping and applicable tax; please alloe 5-10 days for delivery, depending on shipping state).</p>
             <br></br>
            {displayOffers}
            </Container>

        </div>
    )
}

