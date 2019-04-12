import React from "react"

class Card extends React.Component {

  render() {
      let gh

    if(this.props.github) {
         gh =  <div className="btn-link" >
            <i className="card__footer-icon fab fa-github" /> 
            <a href="https://github.com/sparkyyc" target="_blank" className="link">/sparkyyc</a>
        </div>
        
    } else {
        gh = <div></div>
    }

    return (
      <div className="card ">
        <div className="card__image-container" id={this.props.className} >
          <img
            className="card__image"
            src={this.props.img}
            alt=""
          />
        </div>
        <svg className="card__svg" viewBox="0 0 800 500">
          <path
            d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
            stroke="transparent"
            fill="#333"
          />
          <path
            className="card__line"
            d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
            stroke="pink"
            stroke-width="3"
            fill="transparent"
          />
        </svg>

        <div className="card__content">
          <h1 className="card__title">{this.props.title}</h1>
          <p className="card__text">{this.props.text}</p>
        </div>
        <div className="card__footer">
          {gh}
        </div>
      </div>
    )
  }
}

export default Card
// default ({ title, text, img, github, video, link, className }) => (

// )
