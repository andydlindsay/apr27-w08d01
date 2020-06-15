import React from 'react';
import { render, getByTestId, fireEvent, prettyDOM } from '@testing-library/react';
import Result from '../Result';
// import the real axios
import axios from 'axios';

// tell jest to mock axios
jest.mock('axios');

// set up the fake data
const data = {
  resultCount: 3,
  results: [
    { id: 1, name: 'Alice', score: 10 },
    { id: 2, name: 'Bob', score: 7 },
    { id: 3, name: 'Carol', score: 4 },
  ]
};

test('shows appropriate message when the status is "Waiting"', () => {
  const fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: false
  };
  
  const { container } = render(<Result status={fakeState.status} />);
  expect(getByTestId(container, 'result_footer')).toHaveTextContent('Waiting for your choice!');
});

test('mock axios', () => {
  const { getByTestId, findByText, debug, container } = render(<Result status="Waiting" />);
  const button = getByTestId('high-scores');

  // set up the axios mock
  axios.get.mockResolvedValueOnce({ data });

  fireEvent.click(button);

  return findByText('Bob').then(() => {
    console.log(prettyDOM(container));
  });
  // debug();
  
  // return expect(findByText('Bob')).resolves.toBeTruthy();

  // return findByText('Bob');
});
