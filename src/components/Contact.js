import React from "react"

import Footer from "./Footer"

import Rocket from "../assets/other/rocket2.svg"

export default () => (
  <div className="contact">
  <div className="contact__background1"></div>
    <div className="contact__form">
      <form className="form" action="">
      <h1 className="contact__header">Contact</h1>
        <div className="form__group">
          <input
            className="form__input"
            name="name"
            type="text"
            placeholder="Name"
          />
          <label className="form__label" htmlFor="name">
            Name
          </label>
        </div>

        <div className="form__group">
          <input
            className="form__input"
            name="email"
            type="email"
            placeholder="Email"
          />
          <label className="form__label" htmlFor="email">
            Email
          </label>
        </div>

        <div className="form__group">
          <textarea
            className="form__input"
            name="message"
            id="contact-message"
            placeholder="Message"
          />
          <label className="form__label" htmlFor="message">
            Message
          </label>
          {/* <input className="form-message" name="message" type="text" /> */}
        </div>

        <div className="form__group">
          <button className="button form__button">
          Blast off
          <Rocket className="button__icon form__button-icon"/>
          </button>
        </div>
      </form>
    </div>
    <Footer />
  </div>
)
