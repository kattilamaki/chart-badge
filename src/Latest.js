import React from "react";

export default function Latest(props) {
  var latestStyle = {
    fontSize: "40px",
    fontFamily: "Roboto",
    marginRight: "20px",
    display: "flex",
    alignItems: "flex-end",
    color: "#FCF4D9"
  };

  return <div style={latestStyle}>{props.value}</div>;
}
