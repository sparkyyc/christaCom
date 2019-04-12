import React from "react"

import GraphQLLogo from "../assets/graphql.svg"
import PostgresLogo from "../assets/PostgreSQL_logo.svg"
import HerokuLogo from "../assets/heroku-logo-stroke-purple.svg"
import SwiftLogo from "../assets/Swift_logo.svg"

import Robot from "../assets/robots.svg"

import Comp from "./Comp"

export default () => (
  <div className="skills">
    {/* <Robot className="skills__background-robot" /> */}
    <h1 className="skills__header">Skills</h1>
    <div className="skills__info-box">
      <Comp />
    </div>
    <div className="skills__orbit">
      <ul className="orbit-wrap">
        <li className="orbit-center">
          <i className="orbit-center__icon fa fa-code" />
        </li>

        <li>
          <ul className="ring-0">
            <li>
              <i className="orbit-icon fab fa-github-alt" />
              {/* <p className="orbit-skill__text github-text">Check out my github for the code to this website!</p> */}
            </li>
            <li>
              <i className="orbit-icon fab fa-postgres">
                <PostgresLogo className="postgresLogo" />
              </i>
            </li>
            <li>
              <i className="orbit-icon fab fa-heroku">
                <HerokuLogo className="herokuLogo" />
              </i>
            </li>
            <li>
              <i className="orbit-icon fab fa-swift">
                <SwiftLogo className="swiftLogo" />
              </i>
            </li>
          </ul>
        </li>

        <li>
          <ul className="ring-1">
            <li>
              <i className="orbit-icon fab fa-graphql">
                <GraphQLLogo className="graphqlLogo" />
              </i>
            </li>
            <li>
              <i className="orbit-icon fab fa-node-js" />
            </li>
            <li>
              <i className="orbit-icon fab fa-python" />
            </li>
          </ul>
        </li>
        <li>
          <ul className="ring-2">
            <li>
              <i className="orbit-icon fab fa-git" />
            </li>
            <li>
              <i className="orbit-icon fas fa-terminal" />
            </li>
            <li>
              <i className="orbit-icon fab fa-html5" />
            </li>
            <li>
              <i className="orbit-icon fab fa-sass" />
            </li>
          </ul>
        </li>
        <li>
          <ul className="ring-3">
            <li>
              <i className="orbit-icon fab fa-js-square" />
            </li>
            <li>
              <i className="orbit-icon fab fa-css3-alt" />
            </li>
            <li>
              <i className="orbit-icon fab fa-react" />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
)
