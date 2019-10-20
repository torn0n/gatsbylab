import React from "react"
import { Link } from "gatsby"
import { Cat } from "react-kawaii"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Accueil" keywords={[`gatsby`, `application`, `react`]} />
    <Cat size={320} mood="excited" color="#596881" />
    <div>
      <h1>Bonjour à tous ! </h1>
      <p>
        Je suis <b>Thomas Ornon</b>, Développeur Web Full Stack et Mobile !
      </p>
      <p>
        Angular, React, Vue.js, Ionic, GraphQL, Node.js, Docker, Kubernetes,
        AWS, tout m'intéresse !
      </p>
      <p>N'hésitez pas à me contacter pour échanger !</p>
    </div>
  </Layout>
)

export default IndexPage
