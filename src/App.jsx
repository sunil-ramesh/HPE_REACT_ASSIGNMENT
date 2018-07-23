import React, { Component } from 'react'; 
import {Form, FormControl, Button} from 'react-bootstrap'

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      numbers: ""
    }
    this.generateNumbers = this.generateNumbers.bind(this);
  }


  generateNumbers() {
    fetch('http://localhost:3001',{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin':'*'
      }
    })
    .then(function(response) {
      return response.json();
    })
    .then((responseJson) => {
       console.log(responseJson)
    })
  }

  render() {
    {console.log("data", this.props)}
    return (
      <div>
        <Button onClick = {() => this.generateNumbers()}> sumbit </Button>
     </div>
     )
   }
 }

 export default App;
