import React from "react";

const Box = (props) => {
  // 컴퓨터 입장에서 승부결과
  let result = "";
  if (props.title === "Computer" && props.result !== "") {
    if (props.result === "WIN") {
      result = "LOSE";
    } else if (props.result === "LOSE") {
      result = "WIN";
    } else {
      result = "TIE";
    }
  } else {
    result = props.result;
  }

  return (
    <div
      className={
        result === "WIN" ? "box win" : result === "LOSE" ? "box lose" : "box"
      }
    >
      <h1>{props.title}</h1>
      <img className="item-img" src={props.item && props.item.img} />
      <h2>{result}</h2>
    </div>
  );
};

export default Box;
