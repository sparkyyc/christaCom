import React from "react"

import Astro from "../assets/astronauts/astro-8.svg"
import Astro2 from "../assets/astronauts/Astronaut16.svg"

import Planet from "../assets/aliens/alien-3.svg"

import Drip from "../assets/PaintSplatter-22.svg"
import GalaxyPic from "../images/galaxy-milkyway.jpg"

export default () => (
  <div className="about">
    <div className="about__background" />
    <div className="about__header-drip" />
    <Astro2 className="about__astro" />
    <Planet className="about__planet" />
    <div className="about__details">
        <div className="about__details-info">
      <h1 className="about__details-header">About</h1>
      <p className="about__details-text">
        I'm Christa Sparks, a Full Stack web developer who loves to explore and
        experiment with technologies of all sorts. I'm always excited to learn
        new things. I'm probably working on a new wacky site for fun right
        now.
      </p>
      </div>
    </div>
  </div>
)
