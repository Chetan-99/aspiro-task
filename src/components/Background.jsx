import React from "react";
import skinBackground from "../assets/skin_background.png";

function Background(props) {
  return (
    <>
      <img
        src={skinBackground}
        alt="Skin background"
        style={{
          position: "absolute",
          width: "766.31px",
          height: "872.58px",
          left: "790px",
          top: "-30px",
          zIndex: -1,
        }}
      ></img>
    </>
  );
}

export default Background;
