import React from "react"

import Astro from "../assets/astronauts/astro-8.svg"
// 3 or 8
import Drip from "../assets/PaintSplatter-22.svg"

export default () => (
  <div className="about">
    <div className="about__background" />
    <Drip className="about__header-drip" />
    <Astro className="about__astro" />
    <div className="about__details">
      <h1 className="about__details-header">About me</h1>
      <p className="about__details-text">
        Hi! I'm Christa Sparks, a Full Stack web developer who loves to explore
        and experiment with technologies of all sorts. i',m always excited to
        learn new things, and see what exciting things I can do with it. I'm
        probably working on a new wacky portfolio site right now, for fun.
      </p>
    </div>
  </div>
)
