import React from 'react';
import { render, fireEvent, prettyDOM } from '@testing-library/react';
import Game from '../Game';

describe('Game component tests', () => {

  test('toggle the cheating state by clicking on the robot head icon', () => {
    // render the Game component
    const { container, getByTestId, debug } = render(<Game />);
    // console.log(prettyDOM(container));
    // debug();

    // grab the robot head icon
    // getByTestId(container, 'robot-icon');
    const robotIcon = getByTestId('robot-icon');

    // click the robot head icon
    fireEvent.click(robotIcon);

    // check if robot head icon has class "cheating"
    expect(robotIcon).toHaveClass('cheating');

    // click the robot head icon
    fireEvent.click(robotIcon);

    // check if robot head icon does not have class "cheating"
    expect(robotIcon).not.toHaveClass('cheating');
  });

});
