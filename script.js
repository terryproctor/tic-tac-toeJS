const game = (() => {
    //create a new board with empty(null values)
    const gameBoard = (() => {
        let _board = {}
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
            _board = gameboard;
            return gameboard;
        };
        //show updates to the board
        const displayBoard = (board) => {
            for (key in board) {
                cell = document.getElementById([key]);
                cell.textContent = (board[key])
            }
            
        }


    return {newBoard, displayBoard, _board};
    })();

    const player = (name, mark) => {
        let _selectedVal = '';

        const getSelected = () => {
            return _selectedVal
        }
        
        const select = () => {
            let gameDom = document.getElementById("gameContainer");
    
            let on = (e) => {
                if(board[e.target.id] === '') {    
                _selectedVal = e.target.id;
                gameDom.removeEventListener('click' , (e) => on(e));
                board[e.target.id] = _selectedVal;
                board.displayBoard()
                }
                }

            gameDom.addEventListener('click', (e) => on(e))
                
            return _selectedVal;
            };
        return {name, mark, select, getSelected}
    }
    
    ///game properties
    return {
        player, gameBoard,
    };
})();

const board = game.gameBoard;
board.newBoard();
const player1 = game.player('player1', 'X');
const player2 = game.player('player2', 'O');

player1.select();
