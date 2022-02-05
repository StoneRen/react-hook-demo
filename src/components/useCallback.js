import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const url = 'https://httpbin.org/ip';
const CallbackTutorial = () => {
  const [count, setCount] = useState(0);
  const [ip, setIp] = useState('');
  const [toggle, setToggle] = useState(true);

  const onClick = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    axios.get(url).then((res) => {
      setIp(res.data.origin);
    });
  }, []);
  // const splitIp = (ip) => {
  //   console.log(1);
  //   // 每次点击按钮也会触发
  //   return ip.split('.').join('-');
  // };
  // const getSplitIp = useMemo(() => splitIp(ip), [ip]);
  // 其实就是上面的语法糖

  const splitIp = useCallback(() => {
    console.log(4);
    return ip.split('.').join('-');
  }, [ip]);

  return (
    <div className="tutorialBox">
      <h3>useCallback Demo</h3>
      <p>Ip: {splitIp()} 更改显示数值，打开控制台看变化</p>
      <div>
        <button onClick={onClick}>Toggle</button>
        <p>Toggle: {toggle ? 'true' : 'false'}</p>
      </div>
    </div>
  );
};

export default CallbackTutorial;
