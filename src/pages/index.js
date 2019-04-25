import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import SEO from "../components/seo"

import About from "../components/About"
import Container from "../components/Container"
import Header from "../components/Header"
import Nav from "../components/Nav"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

import "../styles/main.scss"

const IndexPage = () => (
  <div className="application">
    <Helmet>
      <script src={"ScrollMagic.min.js"} />
      <script type="text/javascript">
        {document.body.classList.add("js-loading")}
      </script>
      <script type="text/javascript">
        {window.addEventListener("load", () => {
          document.body.classList.remove("js-loading")
        })}
      </script>
    </Helmet>
    <Container>
      <Header />
      {/* <Nav /> */}
      <About />
      <Skills />
      <Projects />
      <Contact />
      {/* <Footer /> */}
    </Container>
  </div>
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
)

export default IndexPage
