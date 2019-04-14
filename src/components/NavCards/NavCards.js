import React from "react"
import "./NavCards.css"
import styled from "styled-components"

// const CardImage = styled.div`
//   background-image: url(${props => props.image});
//   background-size: cover;
// `

const NavCard = props => (
  <div className="NavCard">
    <image image={props.image} />
    <h3>{props.title}</h3>
    <p>{props.text}</p>
  </div>
)

export default NavCard
