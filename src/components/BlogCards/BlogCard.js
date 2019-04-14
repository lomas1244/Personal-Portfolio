import React from "react"
import "./BlogCard.css"

const BlogCard = props => (
  <div className="blogParent">
    <div className="blogContainer">
      <div className="blogContent" />
      <div className="blogImage">
        <img src={props.image} width="100%" height="" />
      </div>
      <div className="contentContainer">
        <h3>{props.title}</h3>
        <p className="blogDescription">{props.description}</p>
      </div>
      <div className="blogAuthor" />
      <div className="" />
      <a href={props.url} className="articleLink">
        Explore
      </a>
    </div>
  </div>
)

export default BlogCard
