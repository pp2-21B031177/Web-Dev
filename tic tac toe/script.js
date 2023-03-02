let currentPlayer = "X";
let gameStatus = ["", "", "", "", "", "", "", "", ""];

const winMessage = () => `Congratulations! ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn!`;

const statusDisplay = document.querySelector(".game-status");
const gameSquares = document.querySelectorAll(".square");

function handleSquareClick(clickedSquare, clickedSquareIndex) {
	if (gameStatus[clickedSquareIndex] !== "") return;
	gameStatus[clickedSquareIndex] = currentPlayer;
	clickedSquare.innerHTML = currentPlayer;
	if (currentPlayer === "X") {
		currentPlayer = "O";
	} else {
		currentPlayer = "X";
	}
	statusDisplay.innerHTML = currentPlayerTurn();
	handleWin();
}

function handleWin() {
	let roundWon = false;
	for (let i = 0; i <= 6; i += 3) {
		const row = gameStatus[i] + gameStatus[i + 1] + gameStatus[i + 2];
		if (row === "XXX" || row === "OOO") {
			roundWon = true;
			break;
		}
	}
	for (let i = 0; i <= 2; i++) {
		const column = gameStatus[i] + gameStatus[i + 3] + gameStatus[i + 6];
		if (column === "XXX" || column === "OOO") {
			roundWon = true;
			break;
		}
	}
	const diagonal1 = gameStatus[0] + gameStatus[4] + gameStatus[8];
	if (diagonal1 === "XXX" || diagonal1 === "OOO") {
		roundWon = true;
	}
	const diagonal2 = gameStatus[2] + gameStatus[4] + gameStatus[6];
	if (diagonal2 === "XXX" || diagonal2 === "OOO") {
		roundWon = true;
	}
	if (roundWon) {
		statusDisplay.innerHTML = winMessage();
		gameSquares.forEach(square => {
			square.removeEventListener("click", handleClick);
		});
		return;
	}
	if (!gameStatus.includes("")) {
		statusDisplay.innerHTML = drawMessage();
		return;
	}
}

function handleReset() {
	currentPlayer = "X";
	gameStatus = ["", "", "", "", "", "", "", "", ""];
	statusDisplay.innerHTML = currentPlayerTurn();
	gameSquares.forEach(square => {
		square.innerHTML = "";
		square.addEventListener("click", handleClick, { once: true });
	});
}

function handleClick(event) {
	const clickedSquare = event.target;
	const clickedSquareIndex = parseInt(clickedSquare.id);
	handleSquareClick(clickedSquare, clickedSquareIndex);
}

gameSquares.forEach(square => {
	square.addEventListener("click", handleClick, { once: true });
});

document.getElementById("reset").addEventListener("click", handleReset);
statusDisplay.innerHTML = currentPlayerTurn();
