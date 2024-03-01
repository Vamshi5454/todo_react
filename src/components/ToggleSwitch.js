import { React, useState } from "react";

function ToggleSwitch() {
  //   const [switchh, setSwitchh] = useState(true);
  const [switchState, setSwitchState] = useState(true);
  const HadleToggle = () => {
    if (switchState === true) {
      setSwitchState(false);
    } else {
      setSwitchState(true);
    }
  };
  return (
    <div>
      <button onClick={HadleToggle}>Toggle</button>
      <h1>switch is {switchState ? "On" : "Off"}</h1>
    </div>
  );
}

export default ToggleSwitch;
