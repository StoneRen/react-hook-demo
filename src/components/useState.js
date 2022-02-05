import React, { useState } from 'react';

const StateTutorial = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const increment = () => {
    setCount(count + 1);
  };

  const onChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
  };

  return (
    <div className="tutorialBox">
      <h3>useState Demo </h3>
      <h3>{count}</h3>
      <button onClick={increment}>increment</button>
      <input placeholder="输入查看变化..." onChange={onChange} />
      {inputValue && <p>输入内容为：{inputValue}</p>}
    </div>
  );
};

export default StateTutorial;
