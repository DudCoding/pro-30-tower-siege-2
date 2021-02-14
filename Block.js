
class Block {
    constructor(x, y, width, height){
        var options = {
            isStatic: false,    
                    
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.visibility = 255
        this.width = width; 
        this.height = height;
        World.add(world, this.body);
    }

    display(){
        
        if(this.body.speed < 4.5){
            var pos = this.body.position;
            rectMode(CENTER);
            fill("skyblue");
            rect(pos.x, pos.y, this.width, this.height);
        }

        else{
            World.remove(world, this.body);
            
            var pos = this.body.position;
            push();
            fill("skyblue");
            this.visibility = this.visibility - 5;
            tint(255, this.visibility);
            rect(pos.x, pos.y, this.width, this.height);
            pop();
            
        }
    }
}
