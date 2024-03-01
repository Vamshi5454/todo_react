import React, { useState } from "react";

function ToggleDown() {
  const [isOpen, setIsOpen] = useState(true);
  const ToggleDown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <h1>ToggleDown</h1>
      <button onClick={ToggleDown}>toggle</button>
      {isOpen && (
        <ul>
          <li>option1</li>
          <li>option2</li>
          <li>option3</li>
        </ul>
      )}
    </div>
  );
}

export default ToggleDown;
