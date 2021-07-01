class Obstacle
{
    constructor(xPos) 
    {
        this.sptX = xPos;
        this.sptY = height - random([220, 420, 620]);

        this.spt = createSprite(this.sptX, this.sptY);
        this.spt.shapeColor = "green";
        this.spt.addImage("ground", obstacleAnimation);
        this.spt.scale = 0.03;
        this.spt.velocityX = -2;
    }
};