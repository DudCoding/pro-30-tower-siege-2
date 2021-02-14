// class Polygon {
//     constructor(x, y, width, height){
//         var options = {
//             isStatic: true,
//             restitution: .4,
//             friction: .8,
//             density: 1.2
//         }

//         this.polygon = Bodies.rectangle(x, y, width, height, options);
//         this.width = width;
//         this.height = height; 

//         this.image = loadImage("polygon.png");
        
//         World.add(world, this.polygon);
//     }

//     display(){

//         var pos = this.polygon.position;
//         imageMode(CENTER);
//         image(this.image, pos.x, pos.y, this.width, this.height);

        
        
//     }
// }