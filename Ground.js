class Ground{
    constructor(y,x,width,height){
     
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
          this.width = 10;
          this.height = 110;

       
    
           World.add(world,this.body);
    }
     
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        rect(-223,289, this.width, this.height);
        translate(pos.x,pos.y);
        
              
        pop();
      }
    }
