import React from 'react'

export default function User(props) {
    const{name,email}=props.user;
  return (
    <div>
        <h2>{name}</h2>
        <span>{email}</span>
    </div>
  )
}
