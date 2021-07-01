class Platform
{
    constructor(xPos) 
    {
        this.sptX = xPos;
        this.sptY = height;
        this.sptW = random(100, 500);
        this.sptH = random([460, 509, 320]);

        this.spt = createSprite(this.sptX, this.sptY, this.sptW, this.sptH);
        this.spt.shapeColor = "green";
        this.spt.addImage("ground", platformAnimation);
    }
};