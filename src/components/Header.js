import React from "react"

import Rocketship from "../assets/rocketship1.svg"
import Firstname from "../assets/NasaChrista"
import Lastname from "../assets/NasaSparks"
import Stars1 from "../assets/stars/sharp-twinkle-group.svg"
import Stars2 from "../assets/stars/mid-cross-group-filled.svg"

import Planet from "../assets/planet/planet-5.svg"
import PlanetSwirl from "../assets/planet/planet-3.svg"

import Astronaut from "../assets/astronauts/astro-9.svg"
import Rocket from "../assets/other/rocket2.svg"

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <div className="logo__container">
            <span className="logo__circle">
              <Rocketship className="logo__rocketship animated" />
              <Firstname fill="#fff" className="logo__firstname" />
              <Lastname fill="#fff" className="logo__lastname" />
              <span className="logo__swoop" />
              <Stars1 className="logo__stars logo__stars-1" />
              <Stars1 className="logo__stars logo__stars-2" />
              <Stars1 className="logo__stars logo__stars-3" />
              <Stars2 className="logo__stars logo__stars-4" />
            </span>
          </div>
        </div>
        <div className="background">
          <Planet className="background__planet" />
          <Astronaut className="background__astro" />
          {/* <a href="#" className="button background__button">
          Blast off
          <Rocket className="button__icon"/>
          </a> */}
          <div className="background__text">
          <p className="background__text-heading">Hello, I'm Christa.</p>
          <p className="background__text-sub">
            A full-stack developer who loves to code outrageous things.
          </p>
        </div>
        </div>
        
      </div>
    )
  }
}

export default Header
