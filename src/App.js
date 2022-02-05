import React from 'react';
import './app.css';
import StateTutorial from './components/useState';
import ReducerTuorial from './components/useReducer';
import EffectTutorial from './components/useEffect';
import RefTutorial from './components/useRef';
import Imperativehandle from './components/useImperative';
import ContextTutorial from './components/useContext';
import MemoTutorial from './components/useMemo';
import CallbackTutorial from './components/useCallback';

export default function App() {
  return (
    <div>
      <h1>Hello React Hook</h1>
      <StateTutorial />
      <ReducerTuorial />
      <EffectTutorial />
      <RefTutorial />
      <Imperativehandle />
      <ContextTutorial />
      <MemoTutorial />
      <CallbackTutorial />
    </div>
  );
}
