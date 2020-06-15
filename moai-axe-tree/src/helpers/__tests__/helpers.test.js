import { announceResult, chooseRobotItem, genStatusMessage } from '../helpers'

describe('announceResult function', () => {
  let fakeState;

  beforeEach(() => {
    fakeState = {
      compSelection: null,
      playerSelection: null,
      status: 'Waiting',
      cheating: false
    };
  });
  
  test('returns "Won" if player is "Axe" and comp is "Tree"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Tree';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Won');
  });

  test('returns "Tied" if player is "Axe" and comp is "Axe"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Axe';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Tied');
  });

  test('returns "Lost" if player is "Axe" and comp is "Moai"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Moai';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Lost');
  });

  test('returns "Waiting" if nothing is passed in', () => {
    expect(announceResult()).toBe('Waiting');
  });
});

describe('chooseRobotItem function', () => {

  test('if cheating, returns the winnning choice', () => {
    const cheating = true;
    const playerSelection = 'Axe';

    const result = chooseRobotItem(playerSelection, cheating);
    expect(result).toBe('Moai');
  });

  test('if not cheating, returns a valid choice', () => {
    const cheating = false;
    const playerSelection = 'Axe';

    const result = chooseRobotItem(playerSelection, cheating);
    const choices = ['Moai', 'Axe', 'Tree'];
    // expect(choices.includes(result)).toBe(true);
    expect(choices).toContain(result);
  });

});

describe('genStatusMessage function', () => {

  test('should return an appropriate message based on status', () => {
    const loss = genStatusMessage('Lost'); // Won, Lost, Tied, Waiting
    const won = genStatusMessage('Won'); // Won, Lost, Tied, Waiting
    const tied = genStatusMessage('Tied'); // Won, Lost, Tied, Waiting
    const waiting = genStatusMessage('Waiting'); // Won, Lost, Tied, Waiting

    expect(loss).toEqual('Too bad! You lost!');
    expect(won).toEqual('Good job!');
    expect(tied).toEqual('50% loss');
    expect(waiting).toEqual('Waiting for your turn');
  });

});
