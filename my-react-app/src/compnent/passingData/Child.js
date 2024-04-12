import React from 'react'

export default function Child({ChildToParent}) {
    const data ='This data is from child component to parent component'
  return (
    <div>
        <button onClick={()=>ChildToParent(data)}>click here</button>
    </div>
  )
}
