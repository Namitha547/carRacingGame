class Game{
 constructor(){ }
 getState(){
    var positionref= database.ref('gameState')
    positionref.on("value",function(data){
        gameState= data.val();
    })
 }
 update(state){
 database.ref('/').update({
    gameState:state
 })

 }

 start(){
    form=new Form();
    form.display();
    player=new Player();
   player.getCount();
   car1=createSprite(150,100,50,50)
   car2=createSprite(200,100,50,50)
   car3=createSprite(250,100,50,50)
   car4=createSprite(300,100,50,50)
   cars=[car1,car2,car3,car4];
   car1.addImage(car1Image);
   car2.addImage(car2Image);
   car3.addImage(car3Image);
   car4.addImage(car4Image);
 }
play(){
   Player.getPlayersInfo();
   player.getRank();
   if(allPlayers!==undefined){

      image(trackImage,0,-displayHeight*4,displayWidth,displayHeight*5);
      var y=100; 
      var x=180;
      var index=0;
      for (var plr in allPlayers){
         y=displayHeight-allPlayers[plr].distance ;
         x=x+200; 
         index=index+1;
         cars[index-1].x = x; 
         cars[index-1].y = y;
         if(index===player.index){
            camera.position.x=displayWidth/2
            camera.position.y=y;
         }
      }
      
   }
   if(keyIsDown(UP_ARROW)){
      player.distance=player.distance+10
      player.updateNumber();
   } 
   if(player.distance>3470){
      gameState=2;
     player.rank=player.rank+1
     Player.playerRank(player.rank);
   }

}
  end(){
   console.log(player.rank);
   
  }
}