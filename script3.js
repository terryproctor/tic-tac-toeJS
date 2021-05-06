const board = (() => {
    let gameDom = document.getElementById("gameContainer");
    let _gameboard = {};
    let _counter = 0;
    let p1 = document.getElementById('p1');
    let p2 = document.getElementById('p2');
    
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
        if (e.target.textContent === '') {
            if (_counter <= 9) {
                _counter ++;
                if (_counter % 2 == 0) {
                    currentPlayer = player2;
                    p1.style.color = 'rgb(60, 16, 253)';
                    p2.style.color = 'grey';
                } else if (_counter % 2 == 1) {
                    currentPlayer = player1
                    p2.style.color = 'rgb(60, 16, 253)';
                    p1.style.color = 'grey'
                }
                e.target.textContent = currentPlayer.mark;
                _gameboard[e.target.id] = currentPlayer.mark;
                } 
                if (_counter === 9) {
                p1.style.color = 'grey';
                p2.style.color = 'grey';
                clickOff;
                }
        }
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

const gameplay = () => {

}

////////////////////////////////////////////////////////////////////////

const gb = board;
gb.createBoard();
let player1 = player('X', 'Terry');
let player2 = player('O', 'Barry');
let currentPlayer = player1;
let p1 = document.getElementById('p1');
p1.style.color = 'limegreen'
gb.clickOn()
