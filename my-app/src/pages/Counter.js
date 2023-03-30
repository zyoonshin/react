import React, { useState } from "react";

const Counter = () => {
  const [num, setNumber] = useState(0);
  return (
    <div>
      <button>+1</button>
      <button>-1</button>
      <p></p>
    </div>
  );
};
