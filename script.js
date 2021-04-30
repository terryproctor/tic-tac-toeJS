const game = (() => {
    //create a new board with empty(null values)
    const gameBoard = (() => {
        //create a newboard
        const newBoard = () => {
            let cells = [];
            let gameDom = document.getElementById("gameContainer");
            function addColumns(rowValue) {
            for (let i = 1; i<=3; i++) {
                cells.push(rowValue + i)
                }
            };
            let row = ['A','B','C'];
            row.forEach(row => addColumns(row));
            let gameboard = {};
            for (key of cells) {
                gameboard[key] = '';
                let cell  = document.createElement('div');
                cell.id = key;
                cell.classList.add('cell');
                gameDom.appendChild(cell);
            };
            
            return gameboard;
        };
        //show updates to the board
        const displayBoard = (board) => {
            for (key in board) {
                cell = document.getElementById([key]);
                cell.textContent = (board[key])
            }
            
        }


    return {newBoard, displayBoard};
    })();

    const player = (name, mark) => {
        let _selectedVal = '';

        const getSelected = () => {
            return _selectedVal
        }
        
        const select = () => {
            let gameDom = document.getElementById("gameContainer");
    
            gameDom.addEventListener('click', (e) => {
                    _selectedVal = e.target.id;
                })
            
            };
        return {name, mark, select, getSelected}
    }
    
    ///game properties
    return {
        player, gameBoard,
    };
})();


const board = game.gameBoard.newBoard()
const player1 = game.player('player1', 'X');
const player2 = game.player('player2', 'O');

console.log(board)
