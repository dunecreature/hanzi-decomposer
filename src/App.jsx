import "./styles.css";
import Input from "./components/Input"
import Display from "./components/Display"
import React from "react"
import * as hanzi from "hanzi"

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      input: "",
      radicals: [],
      components: [],
      definition: ""
    }

    var hanzi = require("hanzi");
    hanzi.start();

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    if (event.target.value.length <= 1) {
      this.setState({input: event.target.value});
      this.setState({radicals: hanzi.decompose(event.target.value, 2).components})
      this.setState({components: hanzi.decompose(event.target.value, 3).components})
    }
  }

  render() { 
    return (
      <div className="App">
        <Input 
          value={this.state.input} 
          handleChange={this.handleChange} 
        />
        <Display 
          character={this.state.input} 
          radicals={this.state.radicals}
          charComponents={this.state.components}
        />
      </div>
    );
  }
}

export default App;
