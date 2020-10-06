import React from 'react';
import './App.scss';
import { BreakSection } from './components/BreakSection/BreakSection';
import { SessionSection } from './components/SessionSection/SessionSection';
import { DisplaySection } from './components/DisplaySection/DisplaySection';

function App() {
  const initialState = {
    minuteLeft: 25,
    secondLeft: 0,
    sessionLength: 25,
    breakLength: 5,
    isPlaying: false,
    isBreak: false,
  };
  const [state, setState] = React.useState(initialState);

  let tm = null;

  const decrementSecond = () => {
    tm = setTimeout(() => {
      if (state.secondLeft > 0 && state.isPlaying) {
        setState({
          ...state,
          secondLeft: state.secondLeft - 1,
        });
      } else if (
        state.secondLeft <= 0 &&
        state.minuteLeft > 0 &&
        state.isPlaying
      ) {
        setState({
          ...state,
          minuteLeft: state.minuteLeft - 1,
          secondLeft: 59,
        });
      } else if (
        state.minuteLeft <= 0 &&
        state.secondLeft <= 0 &&
        state.isPlaying
      ) {
        if (state.isBreak) {
          setState({
            ...state,
            minuteLeft: state.sessionLength,
            isBreak: false,
          });
        } else {
          setState({
            ...state,
            minuteLeft: state.breakLength,
            isBreak: true,
          });
        }
      }
    }, 1000);
  };

  React.useEffect(() => {
    if (state.isPlaying) {
      decrementSecond();
    }
  });
  const startStop = () => {
    setState({ ...state, isPlaying: !state.isPlaying });

    clearTimeout(tm);
    console.log(state.isPlaying);
  };

  const handleReset = () => {
    setState({ ...state, ...initialState });
    clearTimeout(tm);
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

export default App;
