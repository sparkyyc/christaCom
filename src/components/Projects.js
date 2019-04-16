import React from "react"
import ScrollMagic from "scrollmagic";
import { TweenMax, TimelineMax, Linear } from "gsap/TweenMax";
import { ScrollToPlugin } from "gsap/all"; 

import Card from "./Card"
import portPhoto from "../images/port-site-1.png"
import agilityPhoto from "../images/agility.png"

class Projects extends React.Component {

  constructor(props) {
    super(props);
    this.controller = new ScrollMagic.Controller();
  }

  componentDidMount() {
    let tween = new TimelineMax ()
    .add([
      TweenMax.to("#parallaxProject .layer1", 1, {backgroundPosition: "-40% 0", ease: Linear.easeNone}),
      TweenMax.to("#parallaxProject .layer2", 2, {backgroundPosition: "-500% 0", ease: Linear.easeNone})
    ])

    new ScrollMagic.Scene({
      triggerElement: "#projectsTrigger",
      triggerHook: "onEnter",
      duration: "200%"
    })
    .setTween(tween)
    .addTo(this.controller)
  }

  render() {
    return (
      <div className="projects" id="projectsTrigger">
        <div className="parallaxBackground" id="parallaxProject">
          <div className="projects__background1 layer1" />
          <div className="projects__background2 layer2" />
        </div>

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
            text="Agile team management app. React frontend and Node/GraphQL backend"
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