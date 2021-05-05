const board = (() => {
    let gameDom = document.getElementById("gameContainer");

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
    
return {createBoard, _gameboard,}
})();
//////////////////////////////////////////////////////////////////

const player = (mark, name) => {
    this.mark = mark;
    this.name = name;

    let _selectedVal;
    

    const on = (e) => {
        if (gb._gameboard[e.target.id] == '') {
            e.preventDefault();
            
            gb._gameboard[e.target.id] = mark;
            e.target.textContent = mark;
    
            gameDom.removeEventListener('click', on)
            
            return
        }
    }
    
    const selectCell = () => {
        _selectedVal = gameDom.addEventListener('click', on)
        console.log('Hi')
        gb.counter++
        return
        }

    const getSelected = () => {
        return _selectedVal
      }

        
return {mark, name, selectCell, getSelected}
}

///////////////////////////////////////////////////////////////////////

const gb = board;
gb.createBoard();
let player1 = player('X', 'Terry');
let player2 = player('O', 'Barry');