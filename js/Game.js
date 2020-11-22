class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    });
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    car1 = createSprite(100,200);
    car1.addImage(car1I);
    car2 = createSprite(300,200);
    car2.addImage(car2I);
    car3 = createSprite(500,200);
    car3.addImage(car3I);
    car4 = createSprite(700,200);
    car4.addImage(car4I);
    cars = [car1,car2,car3,car4];
  }

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
      var index=0;
      var x = 175,y;
      //var display_position = 130;
      for(var plr in allPlayers){
        index++;
        x+=200;
        y = displayHeight - allPlayers[plr].distance;
        var curCar = cars[index-1];
        curCar.x = x;
        curCar.y = y;
        if(index == player.index){
          curCar.shapeColor = "red";
          camera.x = displayWidth/2;
          camera.y = curCar.y;
        }
        //display_position+=20;
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position);
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    if(player.distance>3860){
        gameState = 2;
        //this.update(gameState);
    }

    drawSprites();
  }

  end(){
        console.log("game end");
  }
}
