import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ color: `purple` }}>
      <h1>Hello i am Thomas Ornon</h1>
      <p>Test on codesandbox</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <br />
    <Link to="/about/">Go to about page</Link>
    <br />
    <Link to="/about-css-modules/">Go to about-css-modules page</Link>
  </Layout>
)

export default IndexPage
