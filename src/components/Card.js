import React from "react"
class Card extends React.Component {
  render() {
    let gh
    let video
    let site

    if (this.props.github) {
      gh = (
        <div className="btn-link">
          <i className="card__footer-icon fab fa-github" />
          <a
            href={this.props.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            /sparkyyc
          </a>
        </div>
      )
    } else {
      gh = <div />
    }

    if (this.props.video) {
      video = (
        <div className="btn-link">
          <i className="card__footer-icon fas fa-video" />
          <a
            href={this.props.video}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            demo video
          </a>
        </div>
      )
    } else {
      video = <div />
    }

    if (this.props.site) {
      site = (
        <div className="btn-link">
          <i className="card__footer-icon fas fa-link" />
          <a
            href={this.props.site}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            live site
          </a>
        </div>
      )
    } else {
      site = <div />
    }

    return (
      <div className="card" id="card">
        <div className="card__image-container" id={this.props.className}>
          <img
            // className={
            //   this.props.animated ? "card__image-animated" : "card__image"
            // }
            className="card__image"
            id="card-image"
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
            // className={
            //   this.props.animated ? "card__line-animated" : "card__line"
            // }
            className="card__line"
            id="card-line"
            d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
            stroke="pink"
            strokeWidth="3"
            fill="transparent"
          />
        </svg>

        <div
          // className={
          //   this.props.animated ? "card__content-animated" : "card__content"
          // }
          className="card__content"
          id="card-content"
        >
          <h1 className="card__title">{this.props.title}</h1>
          <p className="card__text">{this.props.text}</p>
        </div>
        <div
          // className={
          //   this.props.animated ? "card__footer-animated" : "card__footer"
          // }
          className="card__footer"
          id="card-footer"
        >
          {gh}
          {video}
          {site}
        </div>
      </div>
    )
  }
}

export default Card
