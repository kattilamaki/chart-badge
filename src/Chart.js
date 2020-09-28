import React from "react";
import Bar from "./Bar";

export default function Chart(props) {
  const lastFive = props.heights.slice(-5);
  const maxHeight = Math.max(...lastFive);
  const relativeHeights = lastFive.map(height => relativeHeight(height));

  function relativeHeight(originalHeight) {
    return (30 / maxHeight) * originalHeight;
  }

  const bars = relativeHeights.map(bars => {
    return <Bar height={bars} />;
  });

  return bars;
}
