import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import PersistentDrawerLeft from "../components/DrawerNav/DrawerNav"

// import Header from "./header"
import "./layout.css"
import Footer from "./Footer/Footer"
import { Card } from "@material-ui/core"

// FontAwesome

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

library.add(fab, faEnvelope)

const Layout = ({ children, data }) => (
  <div>
    <PersistentDrawerLeft />
    {/* <Header /> */}
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              description
              keywords
            }
          }
          allContentfulLink(sort: { fields: [createdAt], order: ASC }) {
            edges {
              node {
                title
                url
                createdAt
              }
            }
          }
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
      render={data => (
        <>
          <main>{children}</main>
          <Footer data={data} />
        </>
      )}
    />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
