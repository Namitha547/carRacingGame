var ball;
var database;
var position;
var form;
var player;
var game,playerCount;
var allPlayers;
var gameState=0;
var cars,car1,car2,car3,car4;

function preload(){
car1Image=loadImage("images/car1.png");
car2Image=loadImage("images/car2.png");
car3Image=loadImage("images/car3.png");
car4Image=loadImage("images/car4.png");
trackImage=loadImage("images/track.jpg")
}
function setup(){
   
    createCanvas(displayWidth-10,displayHeight-10);
   database=firebase.database()
    game=new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
    if(playerCount===4){
        game.play();
        game.update(1);
    }
if(gameState===2){
    game.end();
}
    drawSprites();
}
