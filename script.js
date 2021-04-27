const game = (() => {
    //create a new board with empty(null values)
    const newBoard = () => {
        let cells = [];
        function addColumns(rowValue) {
        for (let i = 1; i<=3; i++) {
            cells.push(rowValue + i)
            }
        };
        let row = ['A','B','C'];
        row.forEach(row => addColumns(row));
        let gameboard = {};
        for (key of cells) {
            gameboard[key] = null;
        };
        return gameboard;
    };



    return {
        newBoard,
    };
})();

let gameBoard = game.newBoard();
gameBoard.B2 = 'X';
console.log(gameBoard);