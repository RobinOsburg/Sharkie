class  Coins extends MovableObject {

    IMAGES_COINS = [
        'img/4. Marcadores/green/100_ copia 6.png'
    ];


    constructor() {

        super().loadImage('img/4. Marcadores/green/100_ copia 6.png');
        this.loadImages(this.IMAGES_COINS);
        this.x = 20 + Math.random() * 2000; // Zahl zwischen 200 und 700
        this.y =  20 + Math.random() * 500;
        this.height = 50;
        this.widht = 50;
        

    }

   
}