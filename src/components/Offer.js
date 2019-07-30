import React, { Component } from 'react'
import Container from "react-bootstrap/Container"
import axios from "axios"

export default class Offer extends Component {
    constructor(){
        super()
        this.state ={
            offers:[]
        }
    }

    componentDidMount(){

    axios.get("https://www.wsjwine.com/api/offer/0033008").then(response =>{
        console.log('response.data.response.mainItems: ', response);
                this.setState({offers:response.data})
   
    
 })
 console.log(this.state.offers);
    }


    render() {
        return (
            <div>
                <Container style={{display:"flex", alignItems:"center", justifyContent:"space-around"}}><div id="pointed-rectangle" className="corner">Step 1</div><h3>which case would you like?</h3>
               </Container>
             <hr style={{borderTop: '5px solid red', width:"50%"}}/>
             
            </div>
        )
    }
}


// import React, { useState, useEffect }  from 'react'
// import axios from "axios"
// import Container from "react-bootstrap/Container"




// export default function Offer() {
//     const [offers, setOffers] = useState([]);

//     useEffect(async() => {

//         const allOffers = await axios.get("https://www.wsjwine.com/api/offer/0033008")
//         setOffers([allOffers])
//         console.log(offers)
//         //  axios.get("https://www.wsjwine.com/api/offer/0033008").then(response =>{

//         //     setOffers(response.data.response.mainItems)
//         //     console.log('response.data: ', response.data.response.mainItems);
//         //     console.log(offers);
//         // })
//         // .catch( err =>{
//         //     console.log(err);
//         // })
        

//       },[]);
    

//     return (
//         <div>
//             <Container style={{display:"flex", alignItems:"center", justifyContent:"space-around"}}>
//             <div id="pointed-rectangle" className="corner">Step 1</div>
//             <h3>which case would you like?</h3>
//             </Container>
//             <hr style={{borderTop: '5px solid red', width:"50%"}}/>
//             {!offers ? <h2>Loding</h2> : offers.map(offer =>{
//                 return <p>{offer.itemsCode}</p>
//             })}
//         </div>
//     )
// }
