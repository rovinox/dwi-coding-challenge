import React, { Component } from 'react'
import axios from "axios"
import {Container} from "react-bootstrap"

export default class ZipCode extends Component {
    constructor(){
        super()
        this.state ={
            zipcode:"",
            result:[]
        }
        this.cancel=""
    }

    getSearchResults = () =>{
        if( this.cancel ) {
            this.cancel.cancel();
		}
        
		this.cancel = axios.CancelToken.source();
        
		axios.get( `https://www.wsjwine.com/api/address/zipcode/${this.state.zipcode}`, {
            cancelToken: this.cancel.token
		} ).then(res =>{
            this.setState({result:[res.data]})
        })
        
    }
    handleInput = (event) =>{
                this.setState({zipcode:event.target.value},() =>{

                    this.getSearchResults()
                })
               
            }

           
    render() {
        console.log(this.state.result);
        const {result} = this.state
        const displayinfo = result.map( zip =>{
            return <div>
                    <Container style={{marginTop:"10px", fontSize:"30px"}}>
                        {zip.response.city}, {zip.response.stateCode} {zip.response.zipCode}
                    </Container>
                    <Container>
                    {zip.response.stateCode === "CT" ? <h1>Hello i see you're from connecticut</h1> : null}
                    </Container>

                   </div>
        })
        return (
            <div className="zip-component">
                <Container>
                    <input  style={{marginTop:"30px", fontSize:"30px"}}onChange={this.handleInput}></input>
                </Container>     
                <Container>
               {displayinfo}
                </Container>
               
            </div>
        )
    }
}
