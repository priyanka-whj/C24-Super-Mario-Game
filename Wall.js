class Wall
{
    constructor(xPos) 
    {
        this.sptX = xPos;
        this.sptY = height - random([550, 350]);

        this.spt = createSprite(this.sptX, this.sptY);
        this.spt.shapeColor = "green";
        this.spt.addImage("ground", wallAnimation);
        this.spt.scale = 0.08;
    }
};