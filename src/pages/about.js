import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"


export default () => (
    <Layout>
  <div style={{ color: `purple` }}>
    <p>Such wow. Very React.</p>
    <Link to="/">Go back</Link>
  </div>
  </Layout>
)