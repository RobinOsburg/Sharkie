class PufferFish extends MovableObject{

    constructor(){

        super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');

        this.x = 200 + Math.random()*500; // Zahl zwischen 200 und 700
        this.height = 50;
        this.widht = 50;
    }

}