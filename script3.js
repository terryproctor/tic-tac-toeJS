const board = (() => {
    let gameDom = document.getElementById("gameContainer");
    let _gameboard = {};
    let _counter = 0;
    
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
    
    function clickOn() {
    gameDom.addEventListener('click', turnClick, false);
    }

    function clickOff() {
    gameDom.removeEventListener('click', turnClick, false);
    }

    function turnClick(e) {
        if (_counter < 9) {
        _counter ++;
        if (_counter % 2 == 0) {
            currentPlayer = player2
        } else if (_counter % 2 == 1) {
            currentPlayer = player1
        }
        e.target.textContent = currentPlayer.mark;
        _gameboard[e.target.id] = currentPlayer.mark;
        }
        clickOff
    }

    
return {createBoard, _gameboard, _counter, clickOn, clickOff}
})();
///////////////////////////////////////////////////////////////////////

const player = (mark, name) => {
    this.mark = mark;
    this.name = name;
        
return {mark, name}
}

///////////////////////////////////////////////////////////////////////

const gameplay = (() => {

})()

////////////////////////////////////////////////////////////////////////

const gb = board;
gb.createBoard();
let player1 = player('X', 'Terry');
let player2 = player('O', 'Barry');
let currentPlayer = player1;
gb.clickOn()
