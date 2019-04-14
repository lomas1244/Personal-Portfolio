import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PortfolioPage = () => (
  <Layout>
    <SEO title="Portfoio" />
    <h1>Hi from the Portfolio page</h1>
    <p>Welcome to my Portfolio</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default PortfolioPage
