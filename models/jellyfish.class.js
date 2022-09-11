class JellyFish extends MovableObject {


    IMAGES_WALKING = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png',
        ''
    ];
    constructor() {

        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = 1000 + Math.random() * 500; // Zahl zwischen 200 und 700
        this.y = 0;
        this.height = 50;
        this.widht = 50;
        this.animate();
        this.speed = 0.2 + Math.random() * 0.2;
    }

    animate() {
        setInterval(() => {
            this.moveDown();
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 250);
    }
}