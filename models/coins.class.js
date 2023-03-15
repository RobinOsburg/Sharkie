class Coins extends MovableObject {

    IMAGES_COINS = [
        'img/4. Marcadores/green/100_ copia 6.png'
    ];


    constructor() {

        super().loadImage('img/4. Marcadores/green/100_ copia 6.png');
        this.loadImages(this.IMAGES_COINS);
        this.x = 10 + Math.random() * 2000; 
        this.y = 25 + Math.random() * 400;
        this.height = 50;
        this.widht = 50;
    };
}