import React from 'react'
import { BrowserRouter,Link,Route,Router,Routes } from 'react-router-dom'
import ComponentA from './Login'
import ComponenB from './InValid'
import ComponentC from './Credentials'
import Main from './Valid'
export default function Home() {
  return (
    <div className='=App'>
        <h1>Route Example</h1>
        <h2>Click on the links to proceed..!</h2>
        <BrowserRouter>
        <nav>
            <ul>
                <li><Link to= "/compA"> Login</Link></li>
                <li><Link to= "/compC"> LoginCredentials</Link></li>

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
