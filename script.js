var X_image = document.createElement('img');
X_image.src = "X.png"
var O_image = document.createElement('img');
O_image.src = "O.png"
var amount_of_clicks = 0;

var blocks = document.querySelectorAll(".block");

var board = [
    ['','',''],
    ['','',''],
    ['','','']
];

function checkWinner(){
    var WinningCombinations = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6] 
    ];
    for (combination of WinningCombinations){
        const[a,b,c] = combination;
        const currentPlayer = amount_of_clicks % 2 == 0 ? 'O' : 'X';
        if (board[Math.floor(a/3)][a%3] === currentPlayer &&
            board[Math.floor(b/3)][b%3] === currentPlayer &&
            board[Math.floor(c/3)][c%3] === currentPlayer){
                alert(`Gracz ${currentPlayer} wins!`);
                return true;
            }
    }
    return false
}


function handleClick(block){
        amount_of_clicks++;
        const blockIndex = Array.from(blocks).indexOf(block);
        const row = Math.floor(blockIndex/3);
        const col = blockIndex % 3;

        if(amount_of_clicks % 2 == 0){
            block.appendChild(O_image.cloneNode());
            board[row][col] = 'O';
        }else{
            block.appendChild(X_image.cloneNode());
            board[row][col] = 'X';
        }

        if(checkWinner()){
            return;
        }

        block.removeEventListener("click", handleClickFunction);
    };

function handleClickFunction(){
    handleClick(this);
}

blocks.forEach(function(block){
    block.addEventListener("click",handleClickFunction);
});