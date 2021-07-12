class Player{
    constructor(){
        this.name=null;
        this.distance=0;
        this.index=null;
        this.rank=0;
    }

    getCount(){
        var positionref= database.ref('playerCount')
        positionref.on("value",function(data){
            playerCount= data.val();
        })
     }
     
 updateCount(count){
    database.ref('/').update({
       playerCount:count
    })
   
    }

    updateNumber(){
        var number="players/player"+this.index
        database.ref(number).set({
        name:this.name,
        distance:this.distance
        })
       
        }
        static getPlayersInfo(){
            var playerinforef= database.ref('players')
            playerinforef.on("value",function(data){
                allPlayers= data.val();
                
            })
         }
         getRank(){
            var positionref= database.ref('rank')
            positionref.on("value",(data)=>{
                this.rank= data.val();
            })
         }
         static playerRank(count){
            database.ref('/').update({
               rank:count
            })
           
            }
         
    
}
