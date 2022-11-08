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



const PIECES = [
    [Z,"red"],
    [S,"green"],
    [T,"yellow"],
    [O,"blue"],
    [L,"purple"],
    [I,"cyan"],
    [J,"orange"]
];

let p = new Piece(PIECES[0][0],PIECES[0][1]);
function Piece(tetromino,color){
    this.tetromino = tetromino;
    this.color = color;
    
    this.tetrominoN = 0; // we start from the first pattern
    this.activeTetromino = this.tetromino[this.tetrominoN];
    
    // we need to control the pieces xy cordinate
    this.x = 0;
    this.y = 0;
}
Piece.prototype.fill =function(color){
    for( r = 0; r <this.activeTetromino.length; r++){
        for(c = 0; c < this.activeTetromino.length; c++){
            if(this.activeTetromino[r][c]){
                drawSquare(this.x+c,this.y+r, color)
            }
            
        }
    }


}
//draw
Piece.prototype.draw = function(){
    this.fill(this.color);
    
   
}

//undraw
Piece.prototype.unDraw = function(){
    this.fill(VACANT);
    

}
//moveDown
Piece.prototype.moveDown= function(){
    this.unDraw();
    this.y++;
    this.draw();
}
//moveRight the piece
Piece.prototype.moveRight=function(){
    this.unDraw();
    this.x++;
    this.y++;
    this.draw();
}
//moveLeft the piece
Piece.prototype.moveLeft=function(){
    this.unDraw();
    this.x--;
    this.y++;
    this.draw();

}
// pice rotation 
Piece.prototype.rotate= function(){
    this.unDraw();
    this.tetrominoN=(this.tetrominoN+1)%this.tetromino.length;
    this.activeTetromino=this.activeTetromino[this.tetrominoN];
    this.draw();
}
// control pieces 
document.addEventListener("keydown",CONTROL);

function CONTROL(event){
    if(event.keyCode == 37){
        p.moveLeft();
        dropStart=Date.now();

    }else if(event.keyCode == 38){
        p.rotate();
        dropStart=Date.now();

    }else if(event.keyCode == 39){
        p.moveRight();
        dropStart=Date.now();
    }else if(event.keyCode == 40){
        p.moveDown();
        dropStart=Date.now();
    }
}
let dropStart = Date.now();
function drop(){
    let now= Date.now();
    let delta =now - dropStart;
    if(delta > 1000){
        p.moveDown();
        dropStart=Date.now();

    }
    
    requestAnimationFrame(drop);
}
drop();