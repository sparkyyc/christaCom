import React from "react"

class Comp extends React.Component {
  constructor(props) {
    super(props)

    this.state = { message: this.props.screenText, clicked: this.props.clicked }
  }

  componentDidUpdate(oldProps) {
    const newProps = this.props
    if (oldProps.screenText !== newProps.screenText) {
      this.setState({ message: newProps.screenText, clicked: newProps.clicked })
    }
  }

  render() {
    return (
      <div className="comp-container">
        <div className="screen monitor">
          <div className="content">
            <div className="terminal">
              <ul className="btns">
                <li />
                <li />
                <li />
              </ul>
              <div className="text-container">
                <i className="txt fas fa-terminal terminal-icon" />

                <p className="txt txt-command">{this.state.clicked}--version</p>
                <p className="txt txt-main">{this.state.message}</p>
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
  }
}

export default Comp
