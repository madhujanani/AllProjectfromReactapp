
import Header123 from './Header'
import Footer123 from './Footer'

import React, { Component } from 'react'

export default class Main extends Component {
render() {
    return (
    <div>
        <h1>I am in MAIN class component</h1>
        <Header123 headerName='ReactHeader'HeaderId='34'/>
        < Footer123 FooterName='ReactFooter'FooterId='55'/>
    </div>
    )
    }
}