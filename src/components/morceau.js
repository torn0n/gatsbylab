import React from "react"

const Morceau = props => {
  return (
    <div>
      <h2>Je suis morceau !</h2>
      <p>{props.text}</p>
    </div>
  )
}

export default Morceau
