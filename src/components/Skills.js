import React from "react"

import GraphQLLogo from "../assets/graphql.svg"
import PostgresLogo from "../assets/PostgreSQL_logo.svg"
import HerokuLogo from "../assets/heroku-logo-stroke-purple.svg"
import SwiftLogo from "../assets/Swift_logo.svg"

import Comp from "./Comp"

class Skills extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      screenText:
        "Here are a few of the technologies I know, click them for either some info on my knowledge or a joke, it's a surprise.",
      clicked: "Christa",
    }
  }

  onClick = value => {
    switch (value) {
      case "main":
        this.setState({
          screenText:
            "Here are a few of the technologies I know, click them for either some info on my knowledge  or a joke, it's a surprise.",
          clicked: "Christa",
        })
        break
      case "github":
        this.setState({
          screenText:
            "Check out my github, you can find the code to this website there. As well as most of my other projects.",
          clicked: "Github",
        })
        break
      case "postgres":
        this.setState({
          screenText:
            "A solid SQL choice, has the memory of an elephant - hehe.",
          clicked: "PostgreSQL",
        })
        break
      case "heroku":
        this.setState({
          screenText:
            "I'm a bit of a hypocrite, becuase this site is deployed with Netlify for an easier way to recieve anything from the contact form.",
          clicked: "Heroku",
        })
        break
      case "swift":
        this.setState({
          screenText:
            "I created an AR game demo using Swift and ARKit2. Sometimes I whip up AR 3D pokemon on pokemon cards to get cool points with the nieces and nephews.",
          clicked: "Swift",
        })
        break
      case "graphql":
        this.setState({
          screenText: `Unless you want me to talk your ear off about how GraphQL "just makes sense man" I wouldn't recommend bringing it up to me.`,
          clicked: "GraphQL",
        })
        break
      case "node":
        this.setState({
          screenText:
            "Why was the JavaScript developer sad? Becuase he didn't Node how to Express himself.",
          clicked: "Node.js",
        })
        break
      case "python":
        this.setState({
          screenText:
            "Too bad Hogwarts didn't have a computer class, Harry Potter had a great aptitude for Python.",
          clicked: "Python",
        })
        break
      case "git":
        this.setState({
          screenText:
            "DaftPunk.git: clone it, fetch it, merge it, push it; pull it, log it, cherry-pick it",
          clicked: "Git",
        })
        break
      case "terminal":
        this.setState({
          screenText:
            "mkdir hammerTime; chmod 500 hammerTime; cd hammerTime; touch this",
          clicked: "Terminal",
        })
        break
      case "html":
        this.setState({
          screenText:
            "Often overlooked, but without it my neopets page would have looked like trash.",
          clicked: "HTML5",
        })
        break
      case "sass":
        this.setState({
          screenText:
            "People always tell me I'm sassy, thought I'd finally embrace it. This site was written with Sass, deal with it.",
          clicked: "Sass",
        })
        break
      case "javascript":
        this.setState({
          screenText:
            "My first love, sure there may be some issues in the relationship, but you've got to pull through for the kid. Little React needs me.",
          clicked: "JavaScript",
        })
        break
      case "react":
        this.setState({
          screenText:
            "I've got to give you props if you use React, I'm a fan. This site for example was written with Gatsby.js.",
          clicked: "React",
        })
        break
      case "css":
        this.setState({
          screenText:
            "Because without css this site wouldn't look like a space unicorn threw up on it, but maybe that would be for the best.",
          clicked: "CSS3",
        })
        break
      default:
        this.setState({
          screenText:
            "Here are a few of the technologies I know, click them for either some info on my knowledge or a joke, it's a surprise.",
          clicked: "",
        })
        break
    }
  }

  render() {
    return (
      <div className="skills">
        <div className="skills__background" />
        <h1 className="skills__header">Skills</h1>
        <div className="skills__info-box">
          <Comp
            screenText={this.state.screenText}
            clicked={this.state.clicked}
          />
        </div>
        <div className="skills__orbit">
          <ul className="orbit-wrap">
            <li
              className="orbit-center"
              value="main"
              onClick={() => this.onClick("main")}
            >
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
        <div className="skills__phone-list">
          <div className="phone-list">
            <div
              className="phone-list__item phone-list__item-javascript"
              onClick={() => this.onClick("javascript")}
            >
              <i className="orbit-icon fab fa-js-square" />
            </div>
            <div
              className="phone-list__item phone-list__item-css"
              onClick={() => this.onClick("css")}
            >
              <i className="orbit-icon fab fa-css3-alt" />
            </div>
            <div
              className="phone-list__item phone-list__item-react"
              onClick={() => this.onClick("react")}
            >
              <i className="orbit-icon fab fa-react" />
            </div>
            <div
              className="phone-list__item phone-list__item-git"
              onClick={() => this.onClick("git")}
            >
              <i className="orbit-icon fab fa-git" />
            </div>
            <div
              className="phone-list__item phone-list__item-terminal"
              onClick={() => this.onClick("terminal")}
            >
              <i className="orbit-icon fas fa-terminal" />
            </div>
            <div
              className="phone-list__item phone-list__item-html"
              onClick={() => this.onClick("html")}
            >
              <i className="orbit-icon fab fa-html5" />
            </div>
            <div
              className="phone-list__item phone-list__item-sass"
              onClick={() => this.onClick("sass")}
            >
              <i className="orbit-icon fab fa-sass" />
            </div>
            <div
              className="phone-list__item phone-list__item-graphql"
              onClick={() => this.onClick("graphql")}
            >
              <i className="orbit-icon fab fa-graphql">
                <GraphQLLogo className="graphqlLogo" />
              </i>
            </div>
            <div
              className="phone-list__item phone-list__item-node"
              onClick={() => this.onClick("node")}
            >
              <i className="orbit-icon fab fa-node-js" />
            </div>
            <div
              className="phone-list__item phone-list__item-python"
              onClick={() => this.onClick("python")}
            >
              <i className="orbit-icon fab fa-python" />
            </div>
            <div
              className="phone-list__item phone-list__item-github"
              onClick={() => this.onClick("github")}
            >
              <i className="orbit-icon fab fa-github-alt" />
            </div>
            <div
              className="phone-list__item phone-list__item-postgres"
              onClick={() => this.onClick("postgres")}
            >
              <i className="orbit-icon fab fa-postgres">
                <PostgresLogo className="postgresLogo" />
              </i>
            </div>
            <div
              className="phone-list__item phone-list__item-heroku"
              onClick={() => this.onClick("heroku")}
            >
              <i className="orbit-icon fab fa-heroku">
                <HerokuLogo className="herokuLogo" />
              </i>
            </div>
            <div
              className="phone-list__item phone-list__item-swift"
              onClick={() => this.onClick("swift")}
            >
              <i className="orbit-icon fab fa-swift">
                <SwiftLogo className="swiftLogo" />
              </i>
            </div>
            <div className="phone-list__display">
              <span>
                <p className="phone-list__display-title">
                  {this.state.clicked} -- version
                </p>
                <p className="phone-list__display-text">
                  {this.state.screenText}
                </p>
              </span>
              <span>
                <p className="phone-list__display-title">
                  {this.state.clicked} -- version
                </p>
                <p className="phone-list__display-text">
                  {this.state.screenText}
                </p>
              </span>
              <span>
                <p className="phone-list__display-title">
                  {this.state.clicked} -- version
                </p>
                <p className="phone-list__display-text">
                  {this.state.screenText}
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills
