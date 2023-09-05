document.addEventListener("DOMContentLoaded", function () {
    const tiles = document.querySelectorAll(".tile");
    let player = "X";
    let gameOver = false;

    const Combo = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    tiles.forEach((tile, index) => {
      tile.addEventListener("click", () => {
        if (!gameOver && !tile.classList.contains("x") && !tile.classList.contains("o")) {
          tile.classList.add(player.toLowerCase());
          tile.textContent = player;
          
          if (winner(player)) {
            gameOver = true;
            Highlight_Line(player);
            setTimeout(() => {
              alert(player + " is the winner!");
            }, 100);
          } else if ([...tiles].every((tile) => tile.classList.contains("x") || tile.classList.contains("o"))) {
            gameOver = true;
            setTimeout(() => {
              alert("The match is a draw.");
            }, 100);
          } else {
            player = player === "X" ? "O" : "X";
          }
        }
      });
    });
  
    function winner(player) {
      return Combo.some((combo) => {
        return combo.every((index) => tiles[index].classList.contains(player.toLowerCase()));
      });
    }
  
    function Highlight_Line(player) {
      Combo.forEach((combo) => {
        if (combo.every((index) => tiles[index].classList.contains(player.toLowerCase()))) {
          combo.forEach((index) => {
            tiles[index].style.backgroundColor = "red";
          });
        }
      });
    }
  });
  