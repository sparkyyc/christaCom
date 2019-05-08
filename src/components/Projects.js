import React from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import Media from "react-media"
import ReactSwipe from "react-swipe"

import Card from "./Card"
import portPhoto from "../images/port-site-1.jpg"
import agilityPhoto from "../images/agility.jpg"
import maplabsPhoto from "../images/maplabs.jpg"

import ShipArrow from "../assets/aliens/alien-4.svg"

class Projects extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pageCurr: 0,
      cardNumToShow: 2,
      animated: [false, false, false],
      device: "desktop",
    }
  }

  componentDidMount() {
    this.setState({ key: 1 })
  }

  onClickLeft = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        pageCurr: prevState.pageCurr - 1,
        animated: [true, true, false],
      }
    })
  }

  onClickRight = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        pageCurr: prevState.pageCurr + 1,
        animated: [false, true, true],
      }
    })
  }

  next() {
    this.reactSwipe.next()
  }

  prev() {
    this.reactSwipe.prev()
  }

  render() {
    const { pageCurr, cardNumToShow, animated } = this.state
    const cardArr = [
      <CSSTransition timeout={2000} classNames="cardTrans" key={0}>
        <Card
          title="This site"
          text="Check out my github for this site. Made with Gatsby and Sass."
          img={portPhoto}
          className="portfolio-1__img"
          github="https://github.com/sparkyyc/christaCom"
          animated={animated[0]}
          key={0}
        />
      </CSSTransition>,
      <CSSTransition timeout={2000} classNames="cardTrans" key={1}>
        <Card
          title="Agility"
          text="Agile team management app. React frontend and Node/GraphQL backend."
          img={agilityPhoto}
          className="agility__img"
          github="https://github.com/sparkyyc/Agility"
          animated={animated[1]}
          key={1}
        />
      </CSSTransition>,
      <CSSTransition timeout={2000} classNames="cardTrans" key={2}>
        <Card
          title="MAPLabs"
          text="Current UI/UX lead on a project with MAPLabs."
          img={maplabsPhoto}
          className="maplabs__img"
          animated={animated[2]}
          key={2}
        />
      </CSSTransition>,
    ]

    const mobileCardArr = [
      <div>
        <Card
          title="This site"
          text="Check out my github for this site. Made with Gatsby and Sass."
          img={portPhoto}
          className="portfolio-1__img"
          github="https://github.com/sparkyyc/christaCom"
          animated={animated[0]}
          key={0}
        />
      </div>,
      <div>
        <Card
          title="Agility"
          text="Agile team management app. React frontend and Node/GraphQL backend."
          img={agilityPhoto}
          className="agility__img"
          github="https://github.com/sparkyyc/Agility"
          animated={animated[1]}
          key={1}
        />
      </div>,
      <div>
        <Card
          title="MAPLabs"
          text="Current UI/UX lead on a project with MAPLabs."
          img={maplabsPhoto}
          className="maplabs__img"
          animated={animated[2]}
          key={2}
        />
      </div>,
    ]

    let startSlide = 0

    return (
      <div className="projects">
        <h1 className="projects__header">Projects</h1>
        <h3 className="projects__swipeText" id="swipeText">
          Swipe the cards!
        </h3>
        <div className="projects__background1" />
        <div className="projects__background2" />
        <div id="trigger1" />
        <div className="projects__container" id="projects">
          <TransitionGroup className="transGroup">
            <CSSTransition timeout={6000} classNames="arrow-left" key={5}>
              <ShipArrow
                className="projects__arrow projects__arrow-left"
                onClick={pageCurr > 0 ? this.onClickLeft : null}
                style={{ opacity: pageCurr === 0 ? "0" : 1 }}
              />
            </CSSTransition>
            <TransitionGroup classNames="cardGroupTrans">
                  {cardArr.slice(pageCurr, cardNumToShow + pageCurr)}
                </TransitionGroup>
            {/* <Media
              query="(min-width: 601px)"
              // defaultMatches={this.state.device === "desktop"}
              render={() => (
                <TransitionGroup classNames="cardGroupTrans">
                  {cardArr.slice(pageCurr, cardNumToShow + pageCurr)}
                </TransitionGroup>
              )}
            /> */}
            <ReactSwipe
                  className="carousel"
                  swipeOptions={{
                    widthOfSiblingSlidePreview: 10,
                    continuous: false,
                    startSlide:
                      startSlide < mobileCardArr.length && startSlide >= 0
                        ? startSlide
                        : 0,
                  }}
                  ref={reactSwipe => (this.reactSwipe = reactSwipe)}
                  key={mobileCardArr.length}
                >
                  {mobileCardArr}
                </ReactSwipe>
            {/* <Media
              query="(max-width: 600px)"
              // defaultMatches={this.state.device === "mobile"}
              render={() => (
                <ReactSwipe
                  className="carousel"
                  swipeOptions={{
                    widthOfSiblingSlidePreview: 10,
                    continuous: false,
                    startSlide:
                      startSlide < mobileCardArr.length && startSlide >= 0
                        ? startSlide
                        : 0,
                  }}
                  ref={reactSwipe => (this.reactSwipe = reactSwipe)}
                  key={mobileCardArr.length}
                >
                  {mobileCardArr}
                </ReactSwipe>
              )}
            /> */}
            <CSSTransition timeout={6000} classNames="arrow-right" key={3}>
              <ShipArrow
                className="projects__arrow projects__arrow-right"
                onClick={pageCurr < cardArr.length - 2 ? this.onClickRight : {}}
                style={{ opacity: pageCurr >= cardArr.length - 2 ? "0" : "1" }}
                id="arrow-right"
              />
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    )
  }
}

export default Projects

// {pageCurr < cardArr.length - 2 ? (
//   <CSSTransition timeout={6000} classNames="arrow-right" key={3}>
//     <ShipArrow
//       className="projects__arrow projects__arrow-right"
//       onClick={ pageCurr < cardArr.length - 2 ? this.onClickRight: {} }
//       style={ pageCurr > cardArr.length - 2 ? {opacity: "0"}: {}}
//       id="arrow-right"
//     />
//   </CSSTransition>
// ) : (
//   <CSSTransition timeout={6000} classNames="arrow-right" key={4}>
//     <div className="arrow-placeholder" />
//   </CSSTransition>
// )}

// {pageCurr > 0 ? (
//   <CSSTransition timeout={6000} classNames="arrow-left" key={5}>
//     <ShipArrow
//       className="projects__arrow projects__arrow-left"
//       onClick={ pageCurr > 0 ? this.onClickLeft : null }
//       style={ pageCurr === 0 ? {opacity: "0"} : null }
//     />
//   </CSSTransition>
// ) : (
//   <CSSTransition timeout={6000} classNames="arrow-left" key={6}>
//     <div className="arrow-placeholder" />
//   </CSSTransition>
// )}

{
  /* <Media query="(max-width: 600px)">
              {matches =>
                matches ? (
                  <ReactSwipe
                    className="carousel"
                    swipeOptions={{
                      widthOfSiblingSlidePreview: 10,
                      continuous: false,
                      startSlide:
                        startSlide < mobileCardArr.length && startSlide >= 0
                          ? startSlide
                          : 0,
                    }}
                    ref={reactSwipe => (this.reactSwipe = reactSwipe)}
                    key={mobileCardArr.length}
                  >
                    {mobileCardArr}
                  </ReactSwipe>
                ) : (
                    <TransitionGroup classNames="cardGroupTrans">
                      {cardArr.slice(pageCurr, cardNumToShow + pageCurr)}
                    </TransitionGroup>
                )
              }
            </Media> */
}
