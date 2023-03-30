import React, { useState } from "react";
// useState : 동적 값을 나타내기 위해 사용

const Counter = () => {
  const [num, setNumber] = useState(0);
  // const [변수, 앞의 변수에 대한 setter 함수] = useState(0);
  // const num = 0;

  const increase = () => {
    setNumber(num + 1);
    // num = num + 1;
  };

  const decrease = () => {
    setNumber(num - 1);
  };

  return (
    <div>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
      <p>{num}</p>
    </div>
  );
};

export default Counter;
