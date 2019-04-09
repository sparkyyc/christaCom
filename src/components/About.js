import React from "react"

import Astro from "../assets/astronauts/astro-8.svg"
// 3 or 8

export default () => (
  <div className="about">
    <div className="about__background" />
    <Astro className="about__astro" />
    <div className="about__details">
      <h1 className="about__details-header">About me</h1>
      <p className="about__details-text">
        Hi! I'm Christa Sparks, Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Error sint deserunt nisi quaerat doloribus, tempore ea
        cupiditate illo ab ut deleniti eligendi quis animi magni, et commodi ex!
        Aspernatur, temporibus!
      </p>
    </div>
  </div>
)
