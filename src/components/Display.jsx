import React from "react"

const Display = (props) => {
  return (
    <div>
      <h2>The character you entered contains the following radicals: {props.radicals}</h2>
      <h3>The radicals contain the following components: {props.charComponents}</h3>
    </div>
  ) 
}

export default Display