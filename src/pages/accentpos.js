import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AccentposPage = () => (
  <Layout>
    <SEO title="AccentPOS Project" />
    <h1>Hi from the Portfolio page</h1>
    <p>Welcome to my Portfolio</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AccentposPage
