import React from "react"

import Rocketship from "../assets/rocketship1.svg"
import Firstname from "../assets/nasaChrista.inline.svg"
import Lastname from "../assets/nasaSparks.svg"

export default () => (
  <div className="header">
    <div className="logo">
      <div className="logo__container">
        <span className="logo__circle" > 
            <Rocketship className="logo__rocketship" />
            <Firstname className="logo__firstname" />
            <Lastname className="logo__lastname" />
        </span>
      </div>
    </div>
  </div>
)
