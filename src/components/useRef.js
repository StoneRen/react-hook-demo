import React, { useRef, useState } from 'react';

const RefTutorial = () => {
  const [name, setName] = useState('');
  const inputRef = useRef(null);

  const onClick = () => {
    inputRef.current.focus();
    setName(inputRef.current.value);
  };
  const onChange = () => {
    setName(inputRef.current.value);
  };
  return (
    <div className="tutorialBox">
      <h3>useRef Demo</h3>
      <p>
        my name is <strong>{name}</strong>
      </p>
      <input onChange={onChange} ref={inputRef} placeholder="输入姓名.." />
      <button onClick={onClick}>输入姓名</button>
    </div>
  );
};

export default RefTutorial;
