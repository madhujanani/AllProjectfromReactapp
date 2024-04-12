import React, { useContext } from 'react';
import { UserContext } from './Component1';
export default function Component4({props}){
    const user= useContext( UserContext)
    return(
        <div>
            <h1>Component 4</h1>
            <h2> Hello ,{user} again !!</h2>
        </div>
    )

}