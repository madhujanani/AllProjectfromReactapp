import React, { Component } from 'react'

export default class Footer extends Component {
render() {
    return (
    <div>
        <h1>I am in Footer class component</h1>
        <h2>FooterName {this.props.FooterName} Footer Id {this.props.FooterId}</h2>
    </div>
    )
}
}