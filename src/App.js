import React from 'react';
import './App.scss';
import BreakSection from './components/BreakSection/BreakSection';
import SessionSection from './components/SessionSection/SessionSection';
import DisplaySection from './components/DisplaySection/DisplaySection';

function App() {
  const initialState = {
    minuteLeft: 25,
    secondLeft: 0,
    sessionLength: 25,
    breakLength: 5,
    isPlaying: false,
    isBreak: true,
  };
  const [state, setState] = React.useState(initialState);

  return (
    <div className="app">
      <div className="prog-title">Study Timer</div>
      <div className="section-container">
        <BreakSection s={state} />
        <SessionSection s={state} />
      </div>
      <DisplaySection s={state} />
    </div>
  );
}

export default App;
