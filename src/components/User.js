import React, { useContext } from 'react';
import { AppContext } from './useContext';

const User = () => {
  const { name } = useContext(AppContext);
  return (
    <div>
      <h4>Name is {name}</h4>
    </div>
  );
};

export default User;
