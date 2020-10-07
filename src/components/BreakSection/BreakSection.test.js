import { BreakSection } from './BreakSection';
import { render } from '@testing-library/react';
import React from 'react';
import { initialState } from '../../util/initialState/initialState';

let handleLength;

test('renders Break Length', () => {
  const { getByText } = render(
    <BreakSection s={initialState} handleLength={handleLength} />
  );
  const linkElement = getByText(/Break Length/i);
  expect(linkElement).toBeInTheDocument();
});
