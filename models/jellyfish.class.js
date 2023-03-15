class JellyFish extends MovableObject {


    IMAGES_WALKING = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png',
    ];

    otherDirection = false;

    constructor() {

        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = 1000 + Math.random() * 400; 
        this.y = 0;
        this.height = 60;
        this.widht = 60;
        this.animate();
        this.reverse();
        this.speed = 0.2 + Math.random() * 0.2;
    };

    animate() {
        setInterval(() => {
            if (this.otherDirection) {
                this.moveUp();
            } else {
                this.moveDown();
            }
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 500);
    };



    reverse() {
        setInterval(() => {
            this.otherDirection = !this.otherDirection;
        }, 18000);
    };
}