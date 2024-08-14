import React, { Component } from "react";

export default class BoxClass extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // 컴퓨터 입장에서 승부결과
    let result = "";
    if (this.props.title === "Computer" && this.props.result !== "") {
      if (this.props.result === "WIN 😆") {
        result = "LOSE 😩";
      } else if (this.props.result === "LOSE 😩") {
        result = "WIN 😆";
      } else {
        result = "TIE 🔥";
      }
    } else {
      result = this.props.result;
    }

    return (
      <div
        className={
          result === "WIN 😆" ? "box win" : result === "LOSE 😩" ? "box lose" : "box"
        }
      >
        <h1>{this.props.title}</h1>
        <img
          className="item-img"
          src={this.props.item && this.props.item.img}
        />
        <h1>{result}</h1>
      </div>
    );
  }
}
