const game = (() => {
    //create a new board with empty(null values)
    const gameBoard = (() => {
    
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
                gameboard[key] = null;
                let cell  = document.createElement('div');
                cell.id = key;
                cell.classList.add('cell');
                gameDom.appendChild(cell);
            };
            
            return gameboard;
        };
    return {newBoard};
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


game.gameBoard.newBoard()
let player1 = game.player('player1', 'X');


