import React from "react"

import Card from "./Card"

import portPhoto from "../images/port-site-1.png"

export default () => (
  <div className="projects">
    <div className="projects__container">
      <Card 
          title="This site"
          text="Check out my github for this site."
        //   img="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2126&q=80"
        img={portPhoto}
        className="portfolio-1__img"
        github="true"
      />
    </div>
  </div>
)
