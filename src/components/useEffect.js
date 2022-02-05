import React, { useState, useEffect } from 'react';
import axios from 'axios';

const url = 'https://httpbin.org/ip';

const EffectTutorial = () => {
  const [ip, setIp] = useState('');

  useEffect(() => {
    axios.get(url).then((res) => {
      setIp(res.data.origin);
    });
  }, []);

  return (
    <div className="tutorialBox">
      <h3>useEffect Demo</h3>
      <p>Ip: {ip === '' ? '获取中..' : ip}</p>
    </div>
  );
};

export default EffectTutorial;
