let gameBoard = [];
function addColumns(rowValue) {
    for (let i = 1; i<=3; i++) {
        gameBoard.push(rowValue + i)
        }
    }
let row = ['A','B','C'];
row.forEach(row => addColumns(row))
    
console.log(gameBoard);
