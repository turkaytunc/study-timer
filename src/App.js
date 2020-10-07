import React from 'react';
import './App.scss';
import { BreakSection } from './components/BreakSection/BreakSection';
import { SessionSection } from './components/SessionSection/SessionSection';
import { DisplaySection } from './components/DisplaySection/DisplaySection';
import { initialState } from './util/initialState/initialState';
import { decrementSecond } from './util/decrementSecond/decrementSecond';

export function App() {
  const [state, setState] = React.useState(initialState);
  const [timeO, setTimeO] = React.useState(null);

  const changeTitle = (state) => {
    let min = state.minuteLeft < 10 ? '0' + state.minuteLeft : state.minuteLeft;
    let sec = state.secondLeft < 10 ? '0' + state.secondLeft : state.secondLeft;
    let time = `${min} : ${sec}`;
    let study = state.isBreak ? 'Break Time' : 'Study Time';
    document.title = `${study} ${time}`;
  };

  React.useEffect(() => {
    if (state.isPlaying) {
      changeTitle(state);
      let tm = decrementSecond(state, setState);
      setTimeO(tm);
    }
  }, [state, setState]);

  const startStop = () => {
    setState({ ...state, isPlaying: !state.isPlaying });
    clearTimeout(timeO);
  };

  const handleReset = () => {
    setState({ ...state, ...initialState });
    clearTimeout(timeO);
    changeTitle(initialState);
  };

  const handleLength = (type, operation) => {
    switch (type) {
      case 'break':
        if (operation === 'increment') {
          if (state.breakLength > 59) return;
          setState({ ...state, breakLength: state.breakLength + 1 });
          if (state.isBreak) {
            setState({
              ...state,
              minuteLeft: state.minuteLeft + 1,
              breakLength: state.breakLength + 1,
            });
          }
        }
        if (operation === 'decrement') {
          if (state.breakLength <= 1) return;
          setState({ ...state, breakLength: state.breakLength - 1 });
          if (state.isBreak) {
            setState({
              ...state,
              minuteLeft: state.breakLength - 1,
              breakLength: state.breakLength - 1,
            });
          }
        }
        break;
      case 'session':
        if (operation === 'increment') {
          if (state.sessionLength > 59) return;
          setState({
            ...state,
            sessionLength: state.sessionLength + 1,
          });
          if (!state.isBreak) {
            setState({
              ...state,
              minuteLeft: state.minuteLeft + 1,
              sessionLength: state.sessionLength + 1,
            });
          }
        }
        if (operation === 'decrement') {
          if (state.sessionLength <= 1) return;
          setState({
            ...state,
            sessionLength: state.sessionLength - 1,
          });
          if (!state.isBreak && state.minuteLeft > 0) {
            setState({
              ...state,
              minuteLeft: state.minuteLeft - 1,
              sessionLength: state.sessionLength - 1,
            });
          }
        }
        break;
      default:
        setState({ ...state });
    }
  };

  return (
    <div className="app">
      <div className="prog-title">Study Timer</div>
      <div className="section-container">
        <BreakSection s={state} handleLength={handleLength} />
        <SessionSection s={state} handleLength={handleLength} />
      </div>
      <DisplaySection
        s={state}
        handleReset={handleReset}
        startStop={startStop}
      />
    </div>
  );
}
