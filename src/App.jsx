/* eslint react-hooks/exhaustive-deps: off */
import React, { useState, StrictMode, useEffect } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFrag, setFaceShowFrag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchFlag = () => {
    setFaceShowFrag(!faceShowFrag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFrag || setFaceShowFrag(true);
      } else {
        faceShowFrag && setFaceShowFrag(false);
      }
    }
  }, [num]);

  return (
    <React.Fragment>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です!</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFrag && <p>（＾ω＾）</p>}
    </React.Fragment>
  );
};

export default App;
