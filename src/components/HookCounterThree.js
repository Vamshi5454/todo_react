import React, { useState } from "react";

export default function HookCounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <form>
        <input
          type="text"
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />

        <h2>your firstname is {name.firstName}</h2>
        <h2>your lastName is {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </div>
  );
}
