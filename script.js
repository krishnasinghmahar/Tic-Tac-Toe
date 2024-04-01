const ticTacToe = (function () {
  const buttons = document.querySelectorAll('.btn');
  const restartBtn = document.getElementById('restartBtn');
  const h2Tag = document.querySelector('h2');


  let buttonsData = ['', '', '', '', '', '', '', '', ''];

  let currentPlayer = 'X';
  let movesLeft = 9;


  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      if (button.textContent !== '') {
        return;
      }

      if (h2Tag.textContent.includes('wins')) {
        return;
      }

      playTurn(button, index);
    });
  });


  function playTurn(button, index) {
    movesLeft--;
    button.textContent = currentPlayer;
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
    h2Tag.textContent = `Player '${currentPlayer}' Turn`;

    buttonsData[index] = button.textContent;
    console.log(index);

    winConditions();
  }

  function winConditions() {
    // Check rows
    for (let i = 0; i < 9; i += 3) {
      if (
        buttonsData[i] !== '' &&
        buttonsData[i] === buttonsData[i + 1] &&
        buttonsData[i] === buttonsData[i + 2]
      ) {
        h2Tag.textContent = `Player  '${buttonsData[i]} wins!`;
        return;
      }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
      if (
        buttonsData[i] !== '' &&
        buttonsData[i] === buttonsData[i + 3] &&
        buttonsData[i] === buttonsData[i + 6]
      ) {
        setTimeout(() => {
          h2Tag.textContent = `Player  '${buttonsData[i]}' wins!`;
        }, 1);
        return;
      }
    }

    // Check diagonals
    if (
      buttonsData[0] !== '' &&
      buttonsData[0] === buttonsData[4] &&
      buttonsData[0] === buttonsData[8]
    ) {
      setTimeout(() => {
        h2Tag.textContent = `Player  '${buttonsData[0]}' wins!`;
      }, 1);
      return;
    }

    if (
      buttonsData[2] !== '' &&
      buttonsData[2] === buttonsData[4] &&
      buttonsData[2] === buttonsData[6]
    ) {
      setTimeout(() => {
        h2Tag.textContent = `Player  '${buttonsData[2]}' wins!`;
      }, 1);
      return;
    }

    // Check for draw
    if (movesLeft === 0) {
      setTimeout(() => {
        h2Tag.textContent = `Game Draw!`;
      }, 1);
    }
  }

  restartBtn.addEventListener('click', resetGame);

  function resetGame() {
    h2Tag.textContent = `Player 'X' Turn`;
    buttonsData = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    movesLeft = 9;
    buttons.forEach(button => {
      button.textContent = '';
    });
  }
})();


