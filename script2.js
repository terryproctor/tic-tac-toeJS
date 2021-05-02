let gameDom = document.getElementById("gameContainer");

const board = (() => {
    let _gameboard = {
    }
    createBoard = () => {
        for (i = 1; i <= 9; i++) {
            _gameboard[i] = "";
            let cell  = document.createElement('div');
            cell.id = i;
            cell.classList.add('cell');
            gameDom.appendChild(cell);
        }
        return _gameboard;
    }

    //show updates to the board
    const displayBoard = () => {
        for(element in _gameboard)
            {
            gameDom.children.namedItem(element).textContent = _gameboard[element]
            ;
        };
    }
    


return {createBoard, _gameboard, displayBoard}
})();

    





const gb = board;
gb.createBoard();
gb._gameboard[1] = 'X';
gb.displayBoard()