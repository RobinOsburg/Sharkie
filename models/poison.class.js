class Poison extends MovableObject {

    IMAGES_POISON = [
        'img/4. Marcadores/Posión/Animada/3.png'
    ];


    constructor() {
        super().loadImage('img/4. Marcadores/Posión/Animada/3.png');
        this.loadImages(this.IMAGES_POISON);
        this.x = 10 + Math.random() * 2000; 
        this.y = 5 + Math.random() * 400;
        this.height = 50;
        this.widht = 50;
    };
}