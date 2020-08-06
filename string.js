class Strings{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY

        var options = {
          bodyA:body1,
          bodyB:body2,
          pointB:{x:this.offsetX,y:this.offsetY}

       }

      
       this.string = Constraint.create(options);
       World.add(world,this.string)
    }
    display(){
         var pointA = this.string.bodyA.position;
         var pointB = this.string.bodyB.position;
        
         var Anchor1X = pointA.x
         var Anchor1Y = pointA.y

         var Anchor2X = pointB.x+this.offsetX
         var Anchor2Y = pointB.y+this.offsetY

         strokeWeight(4);
         
          line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y); 
        }
} ;