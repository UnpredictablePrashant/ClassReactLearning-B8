import React from 'react'
import Hello from './Hello'

export default function Contactus(props) {
    console.log(props.salutation)
  return (
    <div>
        Name: {props.name} <br></br>
        Phone no.: {props.phone} <br></br>
        Email: {props.email}<br></br>
        
        <Hello></Hello>

    </div>
  )
}
