import React from "react"
import ScrollMagic from "scrollmagic"

import Card from "./Card"
import portPhoto from "../images/port-site-1.png"
import agilityPhoto from "../images/agility.png"

class Projects extends React.Component {

  render() {
    return (
      <div className="projects">
        <div className="projects__background1" />
        <div className="projects__background2" />
        <div id="trigger1" />
        <div className="projects__container" id="projects">
          <Card
            title="This site"
            text="Check out my github for this site. Made with Gatsby and Sass."
            img={portPhoto}
            className="portfolio-1__img"
            github="https://github.com/sparkyyc/christaCom"
          />
          <Card
            title="Agility"
            text="Agile team management app. React frontend and Node/GraphQL backend."
            img={agilityPhoto}
            className="agility__img"
            github="https://github.com/sparkyyc/Agility"
          />
        </div>
      </div>
    )
  }
}

export default Projects
