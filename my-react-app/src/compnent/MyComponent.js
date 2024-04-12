
import { useState } from "react";
function MyComponent(props){
    const[color,setColor]=useState('Red')
    const[car,setcar]=useState({
        Make:'Honda',
        Model:'CRV',
        Year:'2010',
        Color:'Black'
    })
    return(
        <div>
        <h1>This is my custom function  component.Hello{props.MyName}your last name is:{props.LastName} and your id is :{props.id}</h1>
        <p>A new paragraph for this component</p>
        <h3>My {car.Make}{car.Model} is made in year{car.Year}  and the color is {car.Color}</h3>
        <button onClick={()=>setcar(prevState=>{// if we do normal update like setcar.model='tayoto' will earse all other .so use spread operation
            return{...prevState,Color:'purple'}
        })}>car color</button> 
        <h2>My favorite color is:{color}</h2>
        <button onClick={()=>setColor('Blue')}>Change color</button>
        </div>

    )

}
export default MyComponent;