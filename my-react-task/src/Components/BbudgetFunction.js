import { useState } from "react";
import React from "react";

export default function BbudgetFunction() {
  const [Budget, setbudget] = useState();
  const [expenses, setexpenses] = useState();
  
  const amount=Budget-expenses;
  return (
    
    <div>
      <h2>Finding the income using functional component</h2>
      
      <label>Budget</label>
      <input type="number"placeholder="Enter budget" value={Budget} onChange={(e) => setbudget(+e.target.value)}/><br></br>

      <label>Expenses</label>
      <input type="number"placeholder="Enter Expenses" value={expenses} onChange={(e) => setexpenses(+e.target.value)}/><br></br>
      <label>Amount Remaining</label>
      <input type="number" value={amount}  /><br></br>
    </div>
  );
}



