import React from 'react'
import UserB from './UserB'
import UserA from './UserA'

const compnent={
  usera:UserA,
  userb :UserB,  
}
export default function Dynamicrender(props) {
    const SelectUser=compnent[props.user] 
  return (
    <SelectUser/>
  )
}