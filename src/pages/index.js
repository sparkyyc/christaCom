import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

import Container from "../components/Container"
import Header from "../components/Header"
import Nav from "../components/Nav"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Footer from "../components/Footer"


import '../styles/main.scss'

const IndexPage = () => (
  // <Layout>
  //   <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
  //   <h1>Hi people</h1>
  //   <p>Welcome to your new Gatsby site.</p>
  //   <p>Now go build something great.</p>
  //   <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  //     <Image />
  //   </div>
  //   <Link to="/page-2/">Go to page 2</Link>
  // </Layout>
  <Container>
    <Header />
    <Nav />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </Container>
)

export default IndexPage
