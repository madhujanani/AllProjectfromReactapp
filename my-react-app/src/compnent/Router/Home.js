import React from 'react'
import { BrowserRouter,Link,Route,Router,Routes } from 'react-router-dom'
import ComponentA from './ComponentA'
import ComponenB from './ComponenB'
import ComponentC from './ComponentC'
import Main from './Main'
export default function Home() {
  return (
    <div className='=App'>
        <h1>Route Example</h1>
        <BrowserRouter>
        <nav>
            <ul>
                <li><Link to= "/compA"> ComponentA</Link></li>
                <li><Link to= "/compB"> ComponentB</Link></li>
                <li><Link to= "/compC"> ComponentC</Link></li>
                <li><Link to= "/"> Home</Link></li>
            </ul>
        </nav>
        <Routes>
            <Route path ='/' element={<Main/>}></Route>
            {/* <Route path='/'element={<Home/>}/> */}
            <Route path ='/compA' element={<ComponentA/>}></Route>
            <Route path ='/compB' element={<ComponenB/>}></Route>
            <Route path ='/CompC' element={<ComponentC/>}></Route>
        </Routes>
        </BrowserRouter>
        </div>
  )
}
