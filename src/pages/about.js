import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Morceau from "../components/morceau"

export default () => (
  <Layout>
    <div style={{ color: `purple` }}>
      <p>Such wow. Very React.</p>
      <Morceau text="et j'aime les frites !" />
      <Link to="/">Go back</Link>
    </div>
  </Layout>
)
