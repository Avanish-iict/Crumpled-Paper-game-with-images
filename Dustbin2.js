class Dustbin2 {
    constructor(y,x,width,height){
         var options = {
            isStatic:true
        }
      
    
       this.body = Bodies.rectangle(x,y,width,height,options);
       this.width = 90;
          this.height = 90;

          

           World.add(world,this.body);
          }
     
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        rect(727, 646, 10, 110,{isStatic:true});
        
        translate(pos.x,pos.y);
              fill("white");
        pop();
      }
    }
    
