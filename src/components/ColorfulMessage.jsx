import React, { StrictMode } from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color: color,
    fontSyze: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
