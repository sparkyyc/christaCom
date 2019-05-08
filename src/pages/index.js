import React from "react"
// import { Helmet } from 'react-helmet'

import About from "../components/About"
import Container from "../components/Container"
import Header from "../components/Header"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

import "../styles/main.scss"
class IndexPage extends React.Component {
  // componentDidMount() {
  //   document.body.classList.add("js-loading")
  //   window.addEventListener("load", () => {
  //     document.body.classList.remove("js-loading")
  //   })
  // }

  render() {
    return (
      <div className="application">
    {/* TODO: Comment out helmet for deployment */}
    {/* <Helmet>
      <script src={"ScrollMagic.min.js"} />
    </Helmet> */}
    <Container>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Container>
  </div>
    )
  }
}

export default IndexPage
