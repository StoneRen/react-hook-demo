import React, { useState, createContext } from 'react';
import Login from './Login';
import User from './User';

export const AppContext = createContext(null);

const ContextTutorial = () => {
  const [name, setName] = useState('');

  return (
    <div className="tutorialBox">
      <h3>useContext Demo</h3>
      <a href="https://stackblitz.com/edit/react-5zn6vn?file=src%2Fcomponents%2FuseContext.js">
        [source]
      </a>
      <AppContext.Provider value={{ name, setName }}>
        <Login />
        <User />
      </AppContext.Provider>
    </div>
  );
};

export default ContextTutorial;
