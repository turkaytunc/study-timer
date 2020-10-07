import { BreakSection } from './BreakSection';
import { render } from '@testing-library/react';
import React from 'react';

let handleLength;

let s = {
  minuteLeft: 25,
  secondLeft: 0,
  sessionLength: 25,
  breakLength: 5,
  isPlaying: false,
  isBreak: false,
  cycleCount: 0,
};

test('renders Break Length', () => {
  const { getByText } = render(
    <BreakSection s={s} handleLength={handleLength} />
  );
  const linkElement = getByText(/Break Length/i);
  expect(linkElement).toBeInTheDocument();
});
