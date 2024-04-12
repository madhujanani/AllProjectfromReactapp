import React, { useContext } from 'react';
import { UserContext } from './CheckboxChange';
export default function CheckBoxOutput({props}){
    const hobby= useContext( UserContext)
    return(
        <div>
            <h1>Component  CheckBoxOutput</h1>  
            <fieldset>     
            <h3>My Hobbies Includes:</h3><br></br>
            {"You are interestd in !! "+hobby +"\n"}
            </fieldset> 
        </div>
    )

}