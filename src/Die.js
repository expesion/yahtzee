import React, { Component } from "react";
import "./Die.css";
class Die extends Component {
  static defaultProps = {
    numberWords: ["one", "two", "three", "four", "five", "six"],
  };
  render() {
    return (
      <i
        className={`Die fas fa-dice-${
          this.props.numberWords[this.props.val - 1]
        } fa-5x ${this.props.locked ? "Die-locked" : ""}`}
        onClick={this.props.handleClick}
      ></i>
    );
  }
}

export default Die;
