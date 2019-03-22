import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

var Poster = ({ PosterPlug }) => {
  var { imagePlug, titlePlug, textPlug } = PosterPlug;
  return (
    <div>
      <img className="imagePlug" src={imagePlug} />
      <div className="titlePlug">{titlePlug}</div>
      <div className="textPlug">{textPlug}</div>
    </div>
  );
};

var Loser = {
  imagePlug: "https://www.goodnet.org/photos/620x0/29007.jpg",
  titlePlug: "Remember The Last Time You Did Something Great?",
  textPlug: "Yea me neither..."
};
const rootElement = document.getElementById("root");
ReactDOM.render(<Poster PosterPlug={Loser} />, rootElement);
