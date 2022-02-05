import React, { forwardRef, useImperativeHandle, useState } from 'react';

const ChildButton = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);
  const onClick = () => {
    setToggle(!toggle);
  };
  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));
  return (
    <>
      <p>Toggle: {toggle ? 'true' : 'false'}</p>
      <button onClick={onClick}>Button From Child</button>
    </>
  );
});

export default ChildButton;
