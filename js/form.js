class Form{
    constructor(){
        this.input=createInput("Name")
        this.button=createButton("Click to play")
        this.reset=createButton("Reset Player Count")
        this.greeting=createElement('h2')
    }
    display(){
        this.input.position(20,170);
        this.button.position(30,150);
        this.button.mousePressed(()=>{
            player.name=this.input.value()
            playerCount=playerCount+1;
            player.index=playerCount;
            player.updateNumber();
            player.updateCount(playerCount);
            this.greeting.html("Hello!" + player.name)
            this.greeting.position(100,120);
        })
        this.reset.position(50,100);
        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
        })
    }
    

}