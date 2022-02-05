import React, { useRef } from 'react';
import ChildButton from './ChildButton';

const Imperativehandle = () => {
  const buttonRef = useRef(null);
  return (
    <div className="tutorialBox">
      <h3>useImperative Demo</h3>
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        Button From Parent
      </button>
      <ChildButton ref={buttonRef} />
    </div>
  );
};

export default Imperativehandle;
