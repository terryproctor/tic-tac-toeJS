let gameDom = document.getElementById("gameContainer");

const board = (() => {
    let _gameboard = {};
    createBoard = () => {
        for (i = 1; i <= 9; i++) {
            _gameboard[i] = "";
            let cell  = document.createElement('div');
            cell.id = i;
            cell.classList.add('cell');
            gameDom.appendChild(cell);
        }
        return _gameboard;
    };

    //show updates to the board
    const displayBoard = () => {
        for(element in _gameboard)
            {
            gameDom.children.namedItem(element).textContent = 
            _gameboard[element];
        };
    };
    
return {createBoard, _gameboard, displayBoard}
})();

const player = (mark, name) => {
    this.mark = mark;
    this.name = name;

    const on = (e) => {
        if (gb._gameboard[e.target.id] == '') {
            console.log(gb._gameboard)
            console.log(e.target.id);
            console.log(mark);
            gb._gameboard[e.target.id] = mark;
            e.target.textContent = mark;
            console.log(gameDom)
            gameDom.removeEventListener('click', on)
            return
        }
    }
    
    const selectCell = () => {
        gameDom.addEventListener('click', on)
        }

        
return {mark, name, selectCell}
}


const gb = board;
gb.createBoard();
let player1 = player('X', 'Terry');
let player2 = player('O', 'Barry');

