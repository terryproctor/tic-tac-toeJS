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

const gameplay = (() => {
    let currentPlayer = null;
    let counter = 0;

    const checkPlayer = () => {
        currentPlayer = (currentPlayer === null) ? player1 : currentPlayer; 
        return currentPlayer;
    }

    const switchPlayer = () => {
        if (currentPlayer === player2) {
            currentPlayer = player1;
            return currentPlayer;} else if (currentPlayer === player1) {
            currentPlayer = player2;
            return currentPlayer;
        }
    }

return {currentPlayer, switchPlayer, checkPlayer, counter}
})()


const gb = board;
gb.createBoard();
let player1 = player('X', 'Terry');
let player2 = player('O', 'Barry');
const game = gameplay;
let flag = true;
let move1 = player1.selectCell();
let move2 = player2.selectCell();
let move3 = player1.selectCell();























// cyborg's in deep thoughts — Today at 8:18 AM
// So, the main problem is 
//       const selectCell = () => {
//         _selectedVal = gameDom.addEventListener('click', on)
//         return
//        }

// If you put it inside a loop, you are attaching multiple click listeners to gameDom which will fire all at once when clicked. So, you have to find another way of doing it. 
// One suggestion I can think of:
// Keep the event listerner to gameDom always and switching the player based on whose turn it is.

// This is not the only solution though, you can try other things as well.