/*import React, { Component } from "react";

export class App extends Component {
  state = {
    n1: "",
    n2: "",
    res: ""
  };

  div = () => {
    const { n1, n2 } = this.state;
    this.setState({
      res: n1 / n2
    });
  };

  handleChange2 = (event) => {
    this.setState({
      n2: event.target.value
    });
  };

  handleChange1 = (event) => {
    this.setState({
      n1: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>Calc App</h1>
        <input onChange={this.handleChange1} />
        <input onChange={this.handleChange2} />
        <button>/</button>
        <button>*</button>
        <button>-</button>
        <button>+</button>
      </div>
    );
  }
}

export default App;*/

import React, { Component } from "react";
import Main from './Componentes/Main.js'
import './App.css'


export default class App extends Component{
  state={
    count:0
  }

  render (){
    return(
      <>
        <Main />
      </>
    )
  }
}
