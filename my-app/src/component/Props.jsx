import React, {component} from 'react'

export default function props(props) {
  return (
    <>
    <div>
      <h1>hello {props.name}</h1>
      <h1>{props.rollno}</h1>
    </div>
    </>
  )
}
