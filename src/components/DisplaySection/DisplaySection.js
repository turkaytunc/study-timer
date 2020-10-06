import React from 'react';
import './display-section.scss';

export const DisplaySection = ({ s, handleReset, startStop }) => {
  return (
    <div className="display-section">
      <div className="display-timer-container">
        <label id="timer-label">
          {s.isBreak ? 'Break Time' : 'Study Time'}
        </label>
        <div id="time-left">
          {' '}
          {s.minuteLeft < 10 ? '0' + s.minuteLeft : s.minuteLeft} :{' '}
          {s.secondLeft < 10 ? '0' + s.secondLeft : s.secondLeft}{' '}
        </div>
      </div>
      <div className="display-button-container">
        <button id="start_stop" onClick={() => startStop()}>
          Start-Stop
        </button>
        <button id="reset" onClick={() => handleReset()}>
          Reset
        </button>
      </div>
    </div>
  );
};
