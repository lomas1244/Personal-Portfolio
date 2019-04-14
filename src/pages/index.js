import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/Cards/Card"
import Section from "../components/Section"
import Wave from "../components/Wave"
import staticdata from "../../staticdata.json"
import Cell from "../components/Cell"
import styled from "styled-components"
import carddata from "../../carddata.json"
import BlogCard from "../components/BlogCards/BlogCard"
import blogdata from "../../blogdata.json"
import BlogItem from "../components/BlogModal/BlogModal"
import SecondarySection from "../components/SecondSection/SecondarySection"
import { StaticQuery, graphql } from "gatsby"

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94a4ba;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 40px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="Hero">
      <div className="HeroGroup">
        <div>
          <h1>
            <span> Making your </span>
            <br />
            <span> concept a reality </span>
            {/* <br />
            <span> </span> */}
          </h1>
          <p>
            Complete courses about the best tools and design systems. Prototype
            and build apps with React and Swift.
          </p>
          <Link to="/page-2/">Portfolio</Link>
        </div>
      </div>
      <div className="LogoGroup">
        <div className="Logos">
          <img
            className="LogoIcon"
            src={require("../images/logo-react.png")}
            width="30"
          />
          <img
            className="LogoIcon"
            src={require("../images/logo-html.png")}
            width="30"
          />
          <img
            className="LogoIcon"
            src={require("../images/logo-css.png")}
            width="30"
          />
          <img
            className="LogoIcon"
            src={require("../images/logo-sketch.png")}
            width="30"
          />
          <img
            className="LogoIcon"
            src={require("../images/logo-xd.png")}
            width="30"
          />
          <img
            className="LogoIcon"
            src={require("../images/logo-studio.png")}
            width="30"
          />
          <img
            className="LogoIcon"
            src={require("../images/logo-figma.png")}
            width="30"
          />
          <img
            className="LogoIcon"
            src={require("../images/logo-illustrator.png")}
            width="30"
          />
          <img
            className="LogoIcon"
            src={require("../images/logo-photoshop.png")}
            width="30"
          />
          <img
            className="LogoIcon"
            src={require("../images/logo-aftereffects.png")}
            width="30"
          />
        </div>
      </div>
      <Wave className="AnimatedWave" style={{ zIndex: "12" }} />
    </div>

    <div className="Cards">
      <h2>Design & build | Projects</h2>
      <div className="CardGroup">
        {/* <StaticQuery
          query={graphql`
            query SiteTitleQuery {
              allContentfulPortfolioItem {
                edges {
                  node {
                    title
                    type
                    backgroundImage {
                      id
                    }
                  }
                }
              }
            }
          `}
        /> */}

        {carddata.cards.map(card => (
          <Card title={card.title} text={card.subtitle} image={card.image} />
        ))}
      </div>
    </div>
    <Section
      image={require("../images/bg_2_pink.gif")}
      title="Branded Landing pages"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
    />
    <div className="BlogSection">
      <h2>Must-read inspiration</h2>
      <div className="BlogGroup">
        {blogdata.blogs.map(blog => (
          <BlogCard
            title={blog.title}
            description={blog.description}
            image={blog.image}
            author={blog.author}
            url={blog.url}
          />
        ))}
      </div>
      {/* <SectionCaption>12 Sections - 6 hours</SectionCaption>
      <SectionCellGroup>
        {staticdata.cells.map(cell => (
          <Cell title={cell.title} image={cell.image} />
        ))}
      </SectionCellGroup> */}
    </div>
    <SecondarySection image={require("../images/bg_2_pink.gif")} />
  </Layout>
)

export default IndexPage
