import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Morceau from "../components/morceau"

export default () => (
  <Layout>
    <div style={{ color: `purple` }}>
      <p>React c'est génial !</p>
      <Morceau text="Message" />
      <Link to="/">Go back</Link>
    </div>
  </Layout>
)
