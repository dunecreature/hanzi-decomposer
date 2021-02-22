import React from "react"
import "./Input.css"

const Input = (props) => {
  return (
    <input
      className="box"
      type="text" 
      value={props.value} 
      onChange={props.handleChange}
    />
    )
}

export default Input