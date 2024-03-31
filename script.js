const game = (function createTicTacToe() {
  function startGame() {
    let board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    let currentPlayer = 'X';
    let movesLeft = 9;

    function renderBoard() {
      let boardString = '';
      for (let row of board) {
        boardString += ` [${row.join('] [')}] \n`;
      }
      alert(`Board:\n${boardString}`);
    }

    function checkWin() {
      for (let i = 0; i < 3; i++) {
        if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
          return true; // Row win
        }
        if (board[0][i] !== '' && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
          return true; // Column win
        }
      }
      if (board[0][0] !== '' && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        return true; // Diagonal win (top-left to bottom-right)
      }
      if (board[0][2] !== '' && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
        return true; // Diagonal win (top-right to bottom-left)
      }
      return false; // No win
    }

    function playTurn() {
      let position = prompt(`Player ${currentPlayer}, enter the position of your mark:\n [1] [2] [3]\n [4] [5] [6]\n [7] [8] [9]\n`);
      if (position === null) {
        alert('Game cancelled');
        return;
      }

      position = +position;
      if (isNaN(position) || position < 1 || position > 9) {
        alert('Invalid position. Please enter a number between 1 and 9.');
        playTurn(); // Repeat turn
        return;
      }

      let row = Math.floor((position - 1) / 3);
      let column = (position - 1) % 3;

      if (board[row][column] !== '') {
        alert('This position is already occupied. Try again.');
        playTurn(); // Repeat turn
        return;
      }

      board[row][column] = currentPlayer;
      movesLeft--;

      if (checkWin()) {
        renderBoard();
        alert(`Player ${currentPlayer} wins!`);
        restartGame();
        return;
      }

      if (movesLeft === 0) {
        renderBoard();
        alert('It\'s a draw!');
        restartGame();
        return;
      }

      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      renderBoard();
      playTurn();
    }

    function restartGame() {
      let restart = confirm('Do you want to restart the game?');
      if (restart) {
        startGame();
      } else {
        alert('Game over');
      }
    }

    renderBoard();
    playTurn();
  }

  return { startGame};
})();

game.startGame();