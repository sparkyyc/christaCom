import React from "react"

import Astro2 from "../assets/astronauts/Astronaut16.svg"
import Robo1 from "../assets/robots.svg"
import Robo2 from "../assets/swirlEyedRobot.svg"

export default () => (
  <div className="about">
    <div id="about-start" />
    <div className="about__background" />
    <div className="about__header-drip" />
    <Astro2 className="about__astro" />
    <div className="about__details">
      <div className="about__details-info">
        <h1 className="about__details-header">About Me</h1>
        <h4 className="about__details-sub">I break things on the web</h4>
        <Robo1 className="about__details-robo1" />
        <p className="about__details-text about__details-text-1">
          I design and build great digital experiences like websites and mobile
          applications. My strongest language is JavaScript, and my usual tools
          include Node.js, React.js, and GraphQL. I’d love to work with you on
          your next project, so feel free to reach out.
        </p>
        <p className="about__details-text about__details-text-2">
          I moved to Boulder, CO from Florida in 2018 after getting my degree in
          accounting at FSU and working for a few years in finance. I loved
          being creative too much to stick with just numbers, now I've combined
          my love of tech, numbers, and creativity into a career I love.
        </p>
        <Robo2 className="about__details-robo2" />
      </div>
    </div>
  </div>
)
