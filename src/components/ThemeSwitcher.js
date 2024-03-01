import React, { useState } from "react";

function ThemeSwitcher() {
  const [backgroundColor, SetBackgroundColor] = useState("white");
  const handleChange = () => {
    // if (theme == true) {
    //   document.body.style.backgroundColor = "blue";
    //   SetTtheme(false);
    // } else {
    //   document.body.style.backgroundColor = "pink";
    //   SetTtheme(true);
    // }
    // backgroundColor ==='white'?
    SetBackgroundColor((currcolor) =>
      currcolor === "white" ? "black" : "white"
    );
  };

  return (
    <div style={{ backgroundColor }}>
      <h1>change your theme here </h1>
      <button onClick={() => handleChange()}>
        click to change theme of the page
      </button>
    </div>
  );
}

export default ThemeSwitcher;
