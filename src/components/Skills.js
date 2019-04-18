import React from "react"

import GraphQLLogo from "../assets/graphql.svg"
import PostgresLogo from "../assets/PostgreSQL_logo.svg"
import HerokuLogo from "../assets/heroku-logo-stroke-purple.svg"
import SwiftLogo from "../assets/Swift_logo.svg"

import Robot from "../assets/robots.svg"

import Comp from "./Comp"

class Skills extends React.Component {
  constructor(props) {
    super(props)

    this.state = { screenText: "Here are a few of the technologies I know, click them to learn more.", clicked: "" }
  }

  onClick = (value) => {
    switch (value) {
      case "main":
      this.setState({ screenText: "Here are a few of the technologies I know, click them to learn more.", 
    clicked: "" })
        break
      case "github":
        this.setState({ screenText: "Check out my github(linked at the footer of my site), you can find the code to this website there.", clicked: "Github" })
        break
      case "postgres":
        this.setState({ screenText: "My general go-to database. With RESTful routing or GraphQL.", clicked: "PostgreSQL" })
        break
        case "heroku":
        this.setState({ screenText: "Very familiar with heroku deployment, generally what I used for deploying my backend.", clicked: "Heroku" })
          break
        case "swift":
        this.setState({ screenText: "I created an AR game demo using Swift and ARKit2. Demo video in my projects secrtion.", clicked: "Swift" })
          break
        case "graphql":
        this.setState({ screenText: "My current obssession. In a time crunch I'll use something like postgraphile, but I much prefer writing the resolvers and mutations myself.", clicked: "GraphQL" })
          break
        case "node":
        this.setState({ screenText: "I use node/express for most of my personal projects, mostly because of familiarity with it.", clicked: "Node.js" })
          break
          case "python":
        this.setState({ screenText: "I'm a beginner with Python and interested in developing this skill further", clicked: "Python" })
          break
          case "git":
        this.setState({ screenText: "Where would I be without git? Probably at an apple store because a hammer, somehow, fell on my macbook.", clicked: "Git" })
          break
          case "terminal":
        this.setState({ screenText: "The bread an butter. I wonder how I ever did anything on a computer before I knew the terminal.", clicked: "Terminal" })
          break
          case "html":
        this.setState({ screenText: "Often overlooked, but without it my neopets page would have looked like trash.", clicked: "HTML5" })
          break
          case "sass":
        this.setState({ screenText: "People always tell me I'm sassy, thought I'd finally embrace it. This site was written with Sass, deal with it.", clicked: "Sass" })
          break
          case "javascript":
        this.setState({ screenText: "My first love, sure there may be some issues in the relationship, but you've got to pull through for the kid. Little React needs me.", clicked: "JavaScript" })
          break
          case "react":
        this.setState({ screenText: "I may be addicted. Any flavour of React I have to play with. This site for example was written with Gatsby.js.", clicked: "React" })
          break
          case "css":
        this.setState({ screenText: "I love CSS.", clicked: "CSS3" })
          break
      default:
        this.setState({ screenText: "Here are a few of the technologies I know, click them to learn more.", clicked: "" })
        break
    }
    console.log(this.state.clicked)
  }

  render() {
    return (
      <div className="skills">
        <h1 className="skills__header">Skills</h1>
        <div className="skills__info-box">
          <Comp screenText={this.state.screenText} clicked={this.state.clicked} />
        </div>
        <div className="skills__orbit">
          <ul className="orbit-wrap">
            <li className="orbit-center" value="main" onClick={this.onClick}>
              <i className="orbit-center__icon fa fa-code" />
            </li>

            <li>
              <ul className="ring-0">
                <li onClick={() => this.onClick("github")}>
                  <i className="orbit-icon fab fa-github-alt" />
                </li>
                <li onClick={() => this.onClick("postgres")}>
                  <i className="orbit-icon fab fa-postgres">
                    <PostgresLogo className="postgresLogo" />
                  </i>
                </li>
                <li onClick={() => this.onClick("heroku")}>
                  <i className="orbit-icon fab fa-heroku">
                    <HerokuLogo className="herokuLogo" />
                  </i>
                </li>
                <li onClick={() => this.onClick("swift")}>
                  <i className="orbit-icon fab fa-swift">
                    <SwiftLogo className="swiftLogo" />
                  </i>
                </li>
              </ul>
            </li>

            <li>
              <ul className="ring-1">
                <li onClick={() => this.onClick("graphql")}>
                  <i className="orbit-icon fab fa-graphql">
                    <GraphQLLogo className="graphqlLogo" />
                  </i>
                </li>
                <li onClick={() => this.onClick("node")}>
                  <i className="orbit-icon fab fa-node-js" />
                </li>
                <li onClick={() => this.onClick("python")}>
                  <i className="orbit-icon fab fa-python" />
                </li>
              </ul>
            </li>
            <li>
              <ul className="ring-2">
                <li onClick={() => this.onClick("git")}>
                  <i className="orbit-icon fab fa-git" />
                </li>
                <li onClick={() => this.onClick("terminal")}>
                  <i className="orbit-icon fas fa-terminal" />
                </li>
                <li onClick={() => this.onClick("html")}>
                  <i className="orbit-icon fab fa-html5" />
                </li>
                <li onClick={() => this.onClick("sass")}>
                  <i className="orbit-icon fab fa-sass" />
                </li>
              </ul>
            </li>
            <li>
              <ul className="ring-3">
                <li onClick={() => this.onClick("javascript")}>
                  <i className="orbit-icon fab fa-js-square" />
                </li>
                <li onClick={() => this.onClick("css")}>
                  <i className="orbit-icon fab fa-css3-alt" />
                </li>
                <li onClick={() => this.onClick("react")}>
                  <i className="orbit-icon fab fa-react" />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Skills
