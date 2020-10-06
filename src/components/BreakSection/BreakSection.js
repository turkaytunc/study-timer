import React from 'react';
import './break-section.scss';

export const BreakSection = ({ s, handleLength }) => {
  return (
    <div className="break-section">
      <label id="break-label">Break Length</label>
      <div className="break-button-container">
        <button
          id="break-decrement"
          onClick={() => handleLength('break', 'decrement')}
          disabled={s.isPlaying}
        >
          -
        </button>
        <div id="break-length">{s.breakLength}</div>
        <button
          id="break-increment"
          onClick={() => handleLength('break', 'increment')}
          disabled={s.isPlaying}
        >
          +
        </button>
      </div>
    </div>
  );
};
