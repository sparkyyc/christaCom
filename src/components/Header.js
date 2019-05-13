import React from "react"

import Rocketship from "../assets/rocketship1.svg"
import Firstname from "../assets/CHRISTA.svg"
import Lastname from "../assets/SPARKS.svg"
import Stars1 from "../assets/stars/sharp-twinkle-group.svg"
import Stars2 from "../assets/stars/mid-cross-group-filled.svg"
import Planet from "../assets/planet/planet-5.svg"
import Astronaut from "../assets/astronauts/astro-9.svg"

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
          <div className="background__text">
            <div className="background__text-heading">
              Hello, I'm Christa.
              <div className="background__links">
                <a
                  href="https://github.com/sparkyyc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="background__link"
                >
                  <i className="background__links-icon icon fab fa-github" />
                </a>
                <a
                  href="https://www.linkedin.com/in/christa-sparks/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="background__link"
                >
                  <i className="background__links-icon icon fab fa-linkedin-in" />
                </a>
                <a href="mailto:christa.sparks.k@gmail.com" className="background__link">
                  <i className="background__links-icon icon far fa-envelope" />
                </a>
              </div>
            </div>
            <p className="background__text-sub">
              A full-stack developer who loves to code outrageous things.
            </p>
          </div>
          <div className="background__scroll-indicator">
            <a>
              <span />
              Scroll
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
