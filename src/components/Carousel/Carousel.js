import React from "react"
import Flickity from "react-flickity-component"
import "./Carousel.css"
import FeedbackCard from "../FeedbackCard/FeedbackCard"

const flickityOptions = {
  initialIndex: 2,
  freeScroll: true,
  contain: true,
  // disable previous & next buttons and dots
  prevNextButtons: false,
  autoPlay: true,
  pageDots: false,
}

const Carousel = () => (
  <Flickity
    className={"carousel"} // default ''
    elementType={"div"} // default 'div'
    options={flickityOptions} // takes flickity options {}
    disableImagesLoaded={false} // default false
    reloadOnUpdate // default false
    style={{ padding: "100px", height: "400px" }}
  >
    <FeedbackCard />
    <FeedbackCard />
    <FeedbackCard />
    <FeedbackCard />
  </Flickity>
)

export default Carousel
