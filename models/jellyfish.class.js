class JellyFish extends MovableObject {


    IMAGES_WALKING = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png',
    ];


    IMAGES_DEAD = [
        'img/2.Enemy/2 Jelly fish/Dead/Yellow/y1.png',
        'img/2.Enemy/2 Jelly fish/Dead/Yellow/y2.png',
        'img/2.Enemy/2 Jelly fish/Dead/Yellow/y3.png',
        'img/2.Enemy/2 Jelly fish/Dead/Yellow/y4.png',

    ];

    otherDirection = false;

    constructor() {

        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 1200 + Math.random() * 400;
        this.y = 0;
        this.height = 60;
        this.widht = 60;
        this.animate();
        this.reverse();
        this.checkJellyHit();
        this.speed = 0.3 + Math.random() * 0.4;
    };

    animate() {
        setInterval(() => {
            if (this.otherDirection) {
                this.moveUp();
            } else {
                this.moveDown();
            }
        }, 1000 / 40);

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 500);
    };



    reverse() {
        setInterval(() => {
            this.otherDirection = !this.otherDirection;
        }, 18000);
    };

    checkJellyHit() {
        setInterval(() => {
            if (this.isHurt()) {
                this.speed = 0;
                const moveUpInterval = setInterval(() => {
                    this.playAnimation(this.IMAGES_DEAD)
                    this.y -= 5; // move up by 5 pixels per interval
                    if (this.y < -100) {
                        clearInterval(moveUpInterval); // stop the interval when the image is out of the canvas
                    }
                }, 50);
            }
        }, 150);
    };



}