export const announceResult = (playerSelection, compSelection) => {
  const lookup = {
    'Axe': 'Tree',
    'Tree': 'Moai',
    'Moai': 'Axe'
  };
  if (!(playerSelection && compSelection)) {
    return 'Waiting';
  }
  if (lookup[playerSelection] === compSelection) {
    return 'Won';
  }
  if (lookup[compSelection] === playerSelection) {
    return 'Lost';
  }
  return 'Tied';
};

export const chooseRobotItem = (playerSelection, cheating) => {
  const lookup = {
    'Axe': 'Moai',
    'Tree': 'Axe',
    'Moai': 'Tree'
  };
  if (cheating) {
    return lookup[playerSelection];
  } else {
    const choices = ['Moai', 'Axe', 'Tree'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
};

export const genStatusMessage = (status) => {
  const lookup = {
    Won: 'Good job!',
    Lost: 'Too bad! You lost!',
    Tied: '50% loss',
    Waiting: 'Waiting for your turn'
  };
  return lookup[status];
};
