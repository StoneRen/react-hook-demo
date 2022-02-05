import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1, toggle: state.toggle };
    case 'TOGGLE':
      return { count: state.count, toggle: !state.toggle };
    default:
      return state;
  }
};

const ReducerTuorial = () => {
  const [state, dispacth] = useReducer(reducer, {
    count: 0,
    toggle: true,
  });

  return (
    <div className="tutorialBox">
      <h3>useReducer Demo</h3>
      <h3>{state.count}</h3>
      <button
        onClick={() => {
          dispacth({
            type: 'INCREMENT',
          });
        }}
      >
        increment
      </button>
      <h3>Toggle: {state.toggle ? 'true' : 'false'}</h3>

      <button
        onClick={() => {
          dispacth({
            type: 'TOGGLE',
          });
        }}
      >
        toggle
      </button>
    </div>
  );
};

export default ReducerTuorial;
