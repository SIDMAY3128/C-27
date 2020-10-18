class Slingshot{
    constructor(body1,body2){
       var options = {
           bodyA:body1,bodyB:body2,
           length:3,
           stiffness:0.005
       } 
       this.sling = Matter.Constraint.create(options)
       World.add (world,this.sling)
    }
    display (){
        var pointA = this.sling.bodyA.position
        var pointB = this.sling.bodyB.position
        strokeWeight(2)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}