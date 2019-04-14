import React from "react"
import styled from "styled-components"
import Wave from "./Wave"
import WebsiteGroup from "./WebsiteSection/WebsiteGroup"

const SectionGroup = styled.div`
  background: url(${props => props.image});
  height: 900px;
  background-size: cover;
  display: grid;
  grid-template-rows: 300px auto;
  grid-gap: 20px;
  position: relative;
  overflow-y: hidden;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    height: 750px;
  }
`

const SectionLogo = styled.img`
  align-self: end;
  width: 120px;
  margin: 0 auto;
`

const SectionTitleGroup = styled.div`
  margin: 300px auto;
  padding: 0 50px;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr;
  text-align: left;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    margin: 150px auto;
    text-align: center;
    padding: 1em;
  }
`

const SectionTitle = styled.h3`
  color: #fff;
  font-size: 60px;
  margin: 0;
  line-height: 1.2;
  padding-right: 30px;

  @media (max-width: 720px) {
    font-size: 40px;
  }
`

const SectionText = styled.p`
  color: #fff;
`

const WaveBottom = styled.div`
  position: absolute;
  width: 100%;
  bottom: -8px;
  z-index: 3;
`

const WaveTop = styled.div`
  position: absolute;
  width: 100%;
  top: -8px;
  transform: rotate(180deg);
`

const Section = props => (
  <SectionGroup image={props.image}>
    <WaveTop>
      <Wave />
    </WaveTop>
    <WaveBottom>
      <Wave />
    </WaveBottom>
    {/* <SectionLogo src={props.logo} /> */}
    <SectionTitleGroup>
      <SectionTitle>{props.title}</SectionTitle>
      <SectionText>{props.text}</SectionText>
    </SectionTitleGroup>
    <WebsiteGroup />
  </SectionGroup>
)

export default Section
