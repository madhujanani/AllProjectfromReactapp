import React from 'react';
import { useState,createContext } from 'react'
import Component2 from './Component2';

 export const UserContext =createContext();
export default function Component1 (props) {
    const [user,setUser]= useState ('John Doe');
    return (
      <div className='App'>
        <UserContext.Provider value={user}>
        <h1>Component1</h1>
        <h2>Hi,{user}</h2>
        <Component2 />  {/* user ={user}we can use when we are not wraping in usercontent.provider, now simply component is enough */}
        </UserContext.Provider>
  
        </div>
    )
  
}



