class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.slingshot1 = loadImage("sprites/sling1.png")
        this.slingshot2 = loadImage("sprites/sling2.png")
        this.slingshot3 = loadImage("sprites/sling3.png")
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.slingshot1,150,25)
        image(this.slingshot2,125,25)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(10);
            stroke(48,22,8)
            line(pointA.x, pointA.y, pointB.x - 20 , pointB.y);
            line(pointA.x, pointA.y, pointB.x + 20 , pointB.y);
        
    }
    
    }}