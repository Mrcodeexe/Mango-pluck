class Stone{
    constructor(x,y,r){
        var options = {
            isStatic:false,
            friction:0.4,
            density:1,
            restitution:0.1
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("stone.png")
        this.body=Bodies.circle(x,y,r,options);
        World.add(world,this.body)
    }
    display()
    {
        var stonePos=this.body.position;	
		push()
		translate(stonePos.x, stonePos.y);
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(RADIUS);
		image(this.image, 0,0,this.r*2, this.r*2)
		pop()
    }

}