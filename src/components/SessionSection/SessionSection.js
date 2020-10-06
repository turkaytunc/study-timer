import React from 'react';

export const SessionSection = ({ s, handleLength }) => {
  return (
    <div className="session-section">
      <label id="session-label">Session Length</label>
      <div className="session-button-container">
        <button
          id="session-decrement"
          onClick={() => handleLength('session', 'decrement')}
          disabled={s.isPlaying}
        >
          -
        </button>
        <div id="session-length">{s.sessionLength}</div>
        <button
          id="session-increment"
          onClick={() => handleLength('session', 'increment')}
          disabled={s.isPlaying}
        >
          +
        </button>
      </div>
    </div>
  );
};
