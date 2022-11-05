const cvs=document.getElementById("tetries"); 
const ctx=cvs.getContext("2d");
const ROW=20;
const COL=COLUMN=10;
const SQ=squareSize=20;
const  VACANT="WHITE";

ctx.fillStyle= "red";

ctx.fillRect(0,0,50,50);

ctx.fillStyle="BLACK";
ctx.strokeRect(0,0,50,50);