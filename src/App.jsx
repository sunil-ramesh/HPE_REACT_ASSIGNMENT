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
       this.setState({
        numbers: responseJson
       })
    })
  }

  render() {
    return (
      <div>
        <Button onClick = {() => this.generateNumbers()}> sumbit </Button>
     { this.state.numbers ? 
      this.state.numbers.map(number => {
        return(
       <li>
      {number}
    </li>
        )
     })
      : null }
     </div>

     )
    }
  }

 export default App;
