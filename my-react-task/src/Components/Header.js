// import MyComponent from './compnent/myComponent'

import React, { Component } from 'react'


export default class Header extends Component {
    constructor(){
        super();
        this.state={
            id:'header',
            name:'React',
            Level:1
        }
    }
render() {
    return (
    <div> 
    <h1>This is my Header class  component</h1>
    <h2>Header name using props: {this.props.headerName} and id using props : {this.props.HeaderId}</h2>
    <h2>Header class component credentials  </h2>
    <h3>Header Id : {this.state.id}</h3>
    <h3>Header Name : {this.state.name}</h3>
    <h3>Header Level : {this.state.Level}</h3>
    {/* < MyComponent MyName="john" LastName ="johnson" id="9088"/>   */}
    </div>
    )
}
}
