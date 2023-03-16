class Character extends MovableObject {

    speed = 3;
    offset = {
        top: 105,
        bottom: 50,
        left: 40,
        right: 50
    }
    IMAGES_IDLE = [
        'img/1.Sharkie/1.IDLE/1.png',
        'img/1.Sharkie/1.IDLE/2.png',
        'img/1.Sharkie/1.IDLE/3.png',
        'img/1.Sharkie/1.IDLE/4.png',
        'img/1.Sharkie/1.IDLE/5.png',
        'img/1.Sharkie/1.IDLE/6.png',
        'img/1.Sharkie/1.IDLE/7.png',
        'img/1.Sharkie/1.IDLE/8.png',
        'img/1.Sharkie/1.IDLE/9.png',
        'img/1.Sharkie/1.IDLE/10.png',
        'img/1.Sharkie/1.IDLE/11.png',
        'img/1.Sharkie/1.IDLE/12.png',
        'img/1.Sharkie/1.IDLE/13.png',
        'img/1.Sharkie/1.IDLE/14.png',
        'img/1.Sharkie/1.IDLE/15.png',
        'img/1.Sharkie/1.IDLE/16.png',
        'img/1.Sharkie/1.IDLE/17.png',
        'img/1.Sharkie/1.IDLE/18.png',
    ];


    IMAGES_WALKING = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png',
    ];

    IMAGES_DEAD = [
        'img/1.Sharkie/6.dead/1.Poisoned/1.png',
        'img/1.Sharkie/6.dead/1.Poisoned/2.png',
        'img/1.Sharkie/6.dead/1.Poisoned/3.png',
        'img/1.Sharkie/6.dead/1.Poisoned/4.png',
        'img/1.Sharkie/6.dead/1.Poisoned/5.png',
        'img/1.Sharkie/6.dead/1.Poisoned/6.png',
        'img/1.Sharkie/6.dead/1.Poisoned/7.png',
        'img/1.Sharkie/6.dead/1.Poisoned/8.png',
        'img/1.Sharkie/6.dead/1.Poisoned/9.png',
        'img/1.Sharkie/6.dead/1.Poisoned/10.png',
        'img/1.Sharkie/6.dead/1.Poisoned/11.png',
        'img/1.Sharkie/6.dead/1.Poisoned/12.png',
    ];

    IMAGES_HURT = [
        'img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/5.png',

    ];

    IMAGES_FINSLAP = [
        'img/1.Sharkie/4.Attack/Fin slap/1.png',
        'img/1.Sharkie/4.Attack/Fin slap/2.png',
        'img/1.Sharkie/4.Attack/Fin slap/3.png',
        'img/1.Sharkie/4.Attack/Fin slap/4.png',
        'img/1.Sharkie/4.Attack/Fin slap/5.png',
        'img/1.Sharkie/4.Attack/Fin slap/6.png',
        'img/1.Sharkie/4.Attack/Fin slap/7.png',
        'img/1.Sharkie/4.Attack/Fin slap/8.png'

    ];


    world;
    currentImage = 0;
    firstAttack = false;




    constructor() {
        super().loadImage('img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_FINSLAP);
        this.animateMovement();
        this.animateImg();
    };



    checkDirectionRight() {
        return this.world.keyboard.right && this.x < this.world.level.level_end_x;
    };


    checkDirectionLeft() {
        return this.world.keyboard.left && this.x > 0;
    };


    checkDirectionUp() {
        return this.world.keyboard.up && this.y > -50;
    };


    checkDirectionDown() {
        return this.world.keyboard.down && this.y < 300;
    };


    setVolumeAndSound() {
        swimming_sound.volume = 0.2;
        swimming_sound.play()
    };


    animateMovement() {
        setInterval(() => {
            swimming_sound.pause();
            if (this.checkDirectionRight()) {
                this.moveRight();
                this.otherDirection = false;
                this.setVolumeAndSound()
            }

            if (this.checkDirectionLeft()) {
                this.moveLeft();
                this.otherDirection = true;
                this.setVolumeAndSound()
            }

            if (this.checkDirectionUp()) {
                this.moveUp();
                this.setVolumeAndSound()
            }

            if (this.checkDirectionDown()) {
                this.moveDown();
                this.setVolumeAndSound()

            }
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);
    };


    animateImg() {
        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);

            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
                sharkie_hit.play();
                sharkie_hit.volume = 0.2;
            }
            else if (this.world.keyboard.right || this.world.keyboard.left) {
                this.playAnimation(this.IMAGES_WALKING);
            }
            else if (this.world.keyboard.f || this.world.keyboard.f) {
                this.playAnimation(this.IMAGES_FINSLAP);
            }
            else {
                this.playAnimation(this.IMAGES_IDLE);
            }
        }, 150);
    };


}