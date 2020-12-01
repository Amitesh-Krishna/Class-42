var canvas, backgroundImage;
var car1,car2,car3,car4;
var car1I,car2I,car3I,car4I,track,ground;
var cars;
var database;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var finishedPlayers = 0;
var passedFinish = false;

function preload(){
    ground = loadImage("images/ground.png");
    track = loadImage("images/track.jpg");
    car1I = loadImage("images/car1.png");
    car2I = loadImage("images/car2.png");
    car3I = loadImage("images/car3.png");
    car4I = loadImage("images/car4.png");
    bMedal = loadImage("images/Bronze.png");
    sMedal = loadImage("images/Silver.png");
    gMedal = loadImage("images/Gold.png");
}

function setup(){
    canvas = createCanvas(displayWidth-20,displayHeight-30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}


function draw(){
    if(playerCount === 4 && finishedPlayers == 0){
        game.update(1);
    }
    if(gameState === 1){
        clear();
        game.play();
    }
    if(finishedPlayers == 4){
        game.update(2);
    }
    if(gameState == 2){
        game.displayRanks();
    }
}
