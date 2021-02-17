var canvas,backgroundImg;
var gameState = 0;
var playerCount;

var database;

var name, player, form, game;

function setup(){
    createCanvas(400,400);
    database=firebase.database();

    game = new Game();
    game.getState();
    game.start();
    
}

function draw(){
    
}

