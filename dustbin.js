class Dustbin {

    constructor(x,y,width,height,img) {

    this.body = Bodies.rectangle(x,y,width,height, {isStatic:true})
    this.width = width;
    this.height = height;
    this.flg = img;
    this.image = loadImage("sprites/dustbin.png");
    
    World.add(world, this.body)
    }

    display() {
        
        var pos = this.body.position;

        push()
       // stroke("grey")
        //fill("grey")
        rectMode()
        translate(pos.x, pos.y);
        rect(0, 0, this.width, this.height);

        imageMode(CENTER);
        if(this.flg)
        {
        image(this.image, 0, -100, this.width, this.height+200);
        }
        pop()       
    }
}