class Cloud extends MovableObject{
    y = 0;
    widht = 700; 

    constructor(){
    super().loadImage('img/3. Background/Legacy/Layers/1. Light/3.png');

    this.x = 200 + Math.random()*500; // Zahl zwischen 200 und 700
      
    }

}