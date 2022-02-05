import React, { useContext } from 'react';
import { AppContext } from './useContext';

const Login = () => {
  const { setName } = useContext(AppContext);
  return (
    <div>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </div>
  );
};

export default Login;
