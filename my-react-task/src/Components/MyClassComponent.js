import React, { Component } from "react";

export default class MyClassComponent extends Component {

    constructor() {
      super();
      this.state = {
          data: "",
          Newdata: "",
          numberClicked:0
      };
      this.update =this.update.bind(this)
      this.handleChange=this.handleChange.bind(this)
    }
    handleChange(event){
    this.setState({data:event.target.value})  
    }  
    update (){
    this.setState(prevState => ({  Newdata: prevState.data }));
    this.setState(prevstate => ({ numberClicked: prevstate.numberClicked + 1}));  
    };

  render() {
    return (
      <div>      
          <h1>This is my class component</h1>
          <input type="text" name="Name"  placeholder="Enter your name"onChange={this.handleChange} /><br></br>
          <button onClick={this.update }>click to update</button> <br></br>  
          <h2>You are Entering.....!:  {this.state.data } </h2>  
          <h2>You Entered:  {this.state. Newdata } </h2>   
          <h2>No of times you clicked to update data:  {this.state. numberClicked } </h2>   
      </div>
    );
  }
}



