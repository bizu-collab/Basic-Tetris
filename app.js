const cvs=document.getElementById("tetries"); 
const ctx=cvs.getContext("2d");
const ROW=20;
const COL=COLUMN=10;
const SQ=squareSize=20;
const  VACANT="WHITE";

function drawSquare(x,y,color){
    ctx.fillStyle = color;
    ctx.fillRect(x*SQ,y*SQ,SQ,SQ);

    ctx.strokeStyle = "BLACK";
    ctx.strokeRect(x*SQ,y*SQ,SQ,SQ);
}
let board = [];
for( r = 0; r <ROW; r++){
    board[r] = [];
    for(c = 0; c < COL; c++){
        board[r][c] = VACANT;
    }
}

// draw the board
function drawBoard(){
    for( r = 0; r <ROW; r++){
        for(c = 0; c < COL; c++){
            drawSquare(c,r,board[r][c]);
        }
    }
}

drawBoard();

const PIECES=[
    [Z,"red"],
    [S,"green"],
    [T,"yellow"],
    [O,"blue"],
    [L,"purple"],
    [J,"orange"]
    


];
//create piece
function piece(tetromino, color){
    this.tetromino=tetromino;
    this.color=color;
    this.tetrominoN=0;
    this.activeTetromino=this.tetromino[this.tetrominoN];
   //cordinates
    this.x=0;
    this.y=0;
}
