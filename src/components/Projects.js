import React from "react"

import Card from "./Card"
import portPhoto from "../images/port-site-1.png"
import agilityPhoto from "../images/agility.png"
import maplabsPhoto from "../images/maplabs.png"

import ShipArrow from "../assets/aliens/alien-4.svg"

class Projects extends React.Component {
  constructor(props){
    super(props)

    this.state = {pageCurr: 0, cardNumToShow: 2, animated: [false , false, false]}
  }

  onClickLeft = () => {
    this.setState(prevState => {
      return { ...prevState, pageCurr: prevState.pageCurr - 1, animated: [true, true, false] }
    })
  }

  onClickRight = () => {
    this.setState(prevState => {
      return { ...prevState, pageCurr: prevState.pageCurr + 1, animated: [false, true, true] }
    })
  }

  render() {
    const { pageCurr, cardNumToShow, animated } = this.state
    const cardArr = [
      <Card
      title="This site"
      text="Check out my github for this site. Made with Gatsby and Sass."
      img={portPhoto}
      className="portfolio-1__img"
      github="https://github.com/sparkyyc/christaCom"
      animated={animated[0]}
    />,
      <Card
      title="Agility"
      text="Agile team management app. React frontend and Node/GraphQL backend."
      img={agilityPhoto}
      className="agility__img"
      github="https://github.com/sparkyyc/Agility"
      animated={animated[1]}
    />,
    <Card 
      title="MAPLabs"
      text="Current UI/UX lead on a project with MAPLabs."
      img={maplabsPhoto}
      className="maplabs__img"
      animated={animated[2]}
    />
    ]
    return (
      <div className="projects">
        <div className="projects__background1" />
        <div className="projects__background2" />
        <div id="trigger1" />
        <div className="projects__container" id="projects">
          {pageCurr > 0 ? <ShipArrow className="projects__arrow projects__arrow-left" onClick={this.onClickLeft} /> : <div style={{width: "100px"}}></div>}
          {cardArr.slice(pageCurr, cardNumToShow + pageCurr)}
          {pageCurr < cardArr.length - 2 ? <ShipArrow className="projects__arrow projects__arrow-right" onClick={this.onClickRight} /> : <div style={{width: "100px"}}></div>}
        </div>
      </div>
    )
  }
}

export default Projects
