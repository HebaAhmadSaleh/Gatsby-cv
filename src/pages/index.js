import React from "react"
import CV from "../components/cv-implementation/index.js"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <CV />
  </>
)

export default IndexPage
