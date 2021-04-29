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
            // gameDom.addEventListener('click', (e) => {
            //     let target = e.target;
            //     console.log(target.id);
            //     console.log(target.className);
            // }
            //);
            return gameboard;
        };
    
    return {newBoard};
    })();

    const player = (name, mark) => {
        const select = () => {
            value = game.gamePlay.listen();
            return value
        }
        return {name, mark, select}
    }
    
    const gamePlay = (() => {
        const listen = () => {
            let gameDom = document.getElementById("gameContainer");
            gameDom.addEventListener('click', (e) => {
                let target = e.target;
                console.log(target.id)
                return target.id
                }
            )}
    return {listen}
    })()

    return {
        player, gameBoard, gamePlay
    };

    
})();


