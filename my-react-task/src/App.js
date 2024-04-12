import './App.css';
import { useState } from 'react';
//import DynamicRender from './Components/DynamicRenering/DynamicRender'
import DynamicRender from './Components/DynamicRender/DynamicRender';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import LoginTask from './LoginFuncs/loginTask';
import Forgotpassword from './LoginFuncs/Forgotpassword';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faEnvelope,faLock,faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import {library } from '@fortawesome/fontawesome-svg-core';

library.add(faUser,faEnvelope,faLock,faEye,faEyeSlash )

export default function App() {
  const [user, setUser] = useState('usera')

  return (
    <div className="App">
      {/* <DynamicRender user={user}/>
      <button onClick={()=>setUser('usera')}>Switch to User A</button>
      <button onClick={()=>setUser('userb')}>Switch to User B</button>
      <button onClick={()=>setUser('userc')}>Switch to User c</button> */}

      <LoginTask />

      <BrowserRouter>
        <Routes>
          <Route path="/ForgotPassword" element={<Forgotpassword />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}







