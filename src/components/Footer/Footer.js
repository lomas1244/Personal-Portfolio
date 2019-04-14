import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const FooterGroup = styled.div`
  background: #fff;
  padding: 50px 40px;
  margin-top: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  @media (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
    border-top: 1px solid #d4145a;
  }
`
const Text = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #486791;
  max-width: 1440px;
  margin: 0 auto;
  background: linear-gradient(104deg, #9c0031 0%, #ff5887 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 720px) {
    text-align: center;
  }
`
const Button = styled.button`
  background: linear-gradient(104deg, #9c0031 0%, #ff5887 100%);
  box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
  border-radius: 10px;
  color: #fff;
  border: none;
  padding: 16px 60px;
  font-weight: 600;
  font-size: 24px;
  justify-self: center;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  cursor: pointer;

  &hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    transform: translateY(-3px);
  }
`
const LinkGroup = styled.div`
  max-width: 500px;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;

  a {
    transition: 0.8s;
  }

  a:hover {
    color: black;
  }

  @media (max-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
    text-align: center;
  }
`

const Copyright = styled.div`
  color: #486791;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
`

const SocialIcons = styled.div`
  justify-self: right;

  @media (max-width: 720px) {
    justify-self: center;
  }

  a {
    margin: 10px;
    color: #d4145a;
  }
`

const Footer = ({ data, children }) => (
  <FooterGroup>
    <Text>Built by James Lomas using ReactJS, HTML, CSS and Adobe CC.</Text>
    <SocialIcons>
      <a>
        <FontAwesomeIcon icon={["fab", "facebook"]} />
      </a>
      <a>
        <FontAwesomeIcon icon={["fab", "github"]} />
      </a>
      <a>
        <FontAwesomeIcon icon={["fab", "facebook-messenger"]} />
      </a>
      <a>
        <FontAwesomeIcon icon="envelope" />
      </a>
    </SocialIcons>
    <LinkGroup>
      {data.allContentfulLink.edges.map(edge => (
        <a href={edge.node.url}>{edge.node.title}</a>
      ))}
    </LinkGroup>
    {/* <Button>Share</Button> */}
    <Copyright>{children}</Copyright>
  </FooterGroup>
)

export default Footer
