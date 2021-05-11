const board = (() => {
    let gameDom = document.getElementById("gameContainer");
    let _gameboard = {};
    let _counter;
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
    const btn = document.getElementById('reset');
    _counter = 0;
    btn.style.visibility = 'hidden'
    gameDom.addEventListener('click', turnClick, false);
    }

    function clickOff() {
    gameDom.removeEventListener('click', turnClick, false);
    }

    function turnClick(e) {
        const btn = document.getElementById('reset');
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
                if (_counter > 0) {
                    btn.style.visibility = ('visible');
                    btn.addEventListener('click', gb.reset)
                } 
                e.target.textContent = currentPlayer.mark;
                _gameboard[e.target.id] = currentPlayer.mark;
                gameplay.checkWin()
                } 
                if (_counter === 9) {
                p1.style.color = 'grey';
                p2.style.color = 'grey';
                clickOff;
                document.getElementById('gameMessages').textContent = "It's a draw!"
                }
        }
    }

    const displayBoard = () => {
        for(element in _gameboard)
            {
            gameDom.children.namedItem(element).textContent = 
            _gameboard[element];
        };
    };

    const reset = () => {
        gb.clickOff();
        gb._gameboard = {};
        
        let elements = gameDom.getElementsByClassName('cell');
        while(elements[0]) {
        elements[0].parentNode.removeChild(elements[0]);
        }
        gb.createBoard();
        gb.clickOn();
        
        p1.style.color = 'blue';
        p2.style.color = 'grey';
        document.getElementById('gameMessages').textContent = "";
    }

    
return {createBoard, _gameboard, clickOn, clickOff, displayBoard, reset}
})();

const gb = board;

///////////////////////////////////////////////////////////////////////

const player = (mark, name) => {
    this.mark = mark;
    this.name = name;
        
return {mark, name}
}

///////////////////////////////////////////////////////////////////////

const gameplay = (() => {
    const marks = ['X', 'O'];
    let b = gb._gameboard;
    let message = document.getElementById('gameMessages')
    
    const checkWin = () => {

        let winningCombo = [
            [b[1],b[2],b[3]],
            [b[4],b[5],b[6]],
            [b[7],b[8],b[9]],
            [b[1],b[5],b[9]],
            [b[3],b[5],b[7]],
            [b[1],b[4],b[7]],
            [b[2],b[5],b[8]],
            [b[3],b[6],b[9]],
                            ];
        marks.forEach(mark => {
            winningCombo.forEach(element => {
                if (element.every((e) => e === mark)) {
                    message.textContent = `${mark} wins`;
                    board.clickOff();
   
                }
            })
        })

    }
    return {checkWin, }
})()

////////////////////////////////////////////////////////////////////////
gb.createBoard();
let gArea = document.getElementById('gameArea');
let nArea = document.getElementById('nameArea');
gArea.style.visibility="hidden";
let form = document.getElementById("nameForm");

let X = "";
let O = "";

form.addEventListener('submit', function(e){
    e.preventDefault();
    pX_name = form.querySelector('input[name="playerx"]').value;
    pO_name = form.querySelector('input[name="playero"]').value;
    X = pX_name;
    O = pO_name;
    nArea.style.display="none";
    gArea.style.visibility="visible";
    
}
);
console.log(X);
console.log(O);

let player1 = player('X', X);
let player2 = player('O', O);
let currentPlayer = player1;
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
p1.textContent = `${player1.name} X`;
p2.textContent = `${player2.name} O`
p1.style.color = 'blue'
gb.clickOn()
