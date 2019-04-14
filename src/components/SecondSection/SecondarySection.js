import React from "react"
import styled from "styled-components"
import Wave from "../Wave"
import WebsiteGroup from "../WebsiteSection/WebsiteGroup"
import Carousel from "../Carousel/Carousel"

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
  }
`

const SectionTitleGroup = styled.div`
  margin: 300px auto;
  padding: 0 50px;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 40% 60%;
  text-align: left;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

const SectionTitle = styled.h3`
  color: #fff;
  font-size: 60px;
  margin: 0;
  line-height: 1.2;

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

const CarouselGroup = styled.div`
  max-width: 100%;
`

const SecondarySection = props => (
  <SectionGroup image={props.image}>
    <WaveTop>
      <Wave />
    </WaveTop>
    <WaveBottom>
      <Wave />
    </WaveBottom>
    <SectionTitleGroup>
      {/* <SectionTitle>{props.title}</SectionTitle>
      <SectionText>{props.text}</SectionText> */}
      <CarouselGroup>
        <Carousel />
      </CarouselGroup>
    </SectionTitleGroup>
  </SectionGroup>
)

export default SecondarySection
