import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './Helloworld'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListComponent from './components/ListComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserComponent from './components/UserComponent'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
      <HeaderComponent/> 
      <Routes>
        {/* //http://localhost:3000  control+forward /-for command*/}
        <Route path ='/' element={<ListComponent/>}></Route>

        {/* //http://localhost:3000/users */}
        <Route path ='/users' element={<ListComponent/>}></Route>

         {/* //http://localhost:3000/helloworld */}
        <Route path ='/helloworld' element={<HelloWorld/>}></Route>

        {/* //http://localhost:3000/add-user */}
        <Route path ='/add-user' element={<UserComponent/>}></Route>

        {/* //http://localhost:3000/edit-user/2 */}
        <Route path ='/edit-user/:id' element={<UserComponent/>}></Route>

      </Routes>
      
      
      {/* <FooterComponent/> */}
      </BrowserRouter>
      
     
        
        
      </div>
    </>
  )
}

export default App
