import React from "react"

export default () => (
  <div className="comp-container">
    <div className="screen monitor">
      <div className="content">
        {/* <div className="pg">
          <ul className="btns">
            <li />
            <li />
            <li />
          </ul>
          <ul className="txt">
            <li />
            <li />
            <li className="thin" />
            <li className="thin" />
            <li className="thin" />
          </ul>
        </div> */}
        <div className="terminal">
          <ul className="btns">
            <li />
            <li />
            <li />
          </ul>
          <div className="txt">
            <i className="txt fas fa-terminal terminal-icon" />
            <p className="txt txt-main">
              Here are a few of the technologies I know, hover them to learn
              more.
            </p>
            <p className="txt txt-skill txt-github">
              Check out my github for the code to this website!
            </p>
          </div>
        </div>
      </div>
      <div className="base">
        <div className="grey-shadow" />
        <div className="foot top" />
        <div className="foot bottom" />
        <div className="shadow" />
        <div className="keyboard">
          <div className="btm" />
          <ul className="keys">
            <li />
            <li />
            <li />
            <li />
          </ul>
          <div className="shadow" />
        </div>
      </div>
    </div>
  </div>
)
