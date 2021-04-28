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
        const select = (value) => {
            if (value !== 'undefined') {
            return value;
        }
        }
        return {name, mark, select}
    }


    return {
        player, gameBoard
    };
})();


