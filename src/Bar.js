import React from "react";

export default function Bar(props) {
  var barStyle = {
    width: "5px",
    height: props.height,
    background: "	#FF7A5A",
    marginRight: "5px"
  };
  return <div style={barStyle} />;
}
