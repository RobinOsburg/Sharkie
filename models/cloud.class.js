class Cloud extends MovableObject {
    y = 0;
    widht = 700;
    height = 300;


    constructor() {
        super().loadImage('img/3. Background/Layers/1. Light/1.png');
        this.x = Math.random() * 500; 
        this.animate();
    }

    animate() {
        this.moveLeft();
    }
}