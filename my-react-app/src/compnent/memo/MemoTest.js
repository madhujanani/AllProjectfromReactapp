import React, { useState ,useMemo} from 'react'

export default function MemoTest(props) {
    const [number ,setnumber]=useState(0);
    const squaredNum =useMemo(()=>{
        return squareNum(number);
    },[number]);
    const[counter,setCounter]=useState(0);

    function squareNum(number){
        return Math.pow(number,2);
        //console("Squared..")

    }

    const onChangeHandler =(e) =>{
        setnumber(e.target.value)
    }
    const counterHandler =() =>{
        setCounter(counter+1)
    }

    
  return (
    <div className='App'>
        <h1>UseMemo Example</h1>
        <input type ="number" placeholder='Enter a number' value={number} onChange={onChangeHandler}/>
        <div>Output :{squaredNum}</div>
        <button onClick={counterHandler}>Count++</button>
        <div>Counter:{counter}</div>
    </div>
  )
}


