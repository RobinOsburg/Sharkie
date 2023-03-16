class Endboss extends MovableObject {

    offset = {
        top: 190,
        bottom: 60,
        left: 10,
        right: 10
    }

    height = 400;
    widht = 300;
    y = 0;
    x = 0;
    world;


    IMAGES_WALKING = [
        'img/2.Enemy/3 Final Enemy/2.floating/1.png',
        'img/2.Enemy/3 Final Enemy/2.floating/2.png',
        'img/2.Enemy/3 Final Enemy/2.floating/3.png',
        'img/2.Enemy/3 Final Enemy/2.floating/4.png',
        'img/2.Enemy/3 Final Enemy/2.floating/5.png',
        'img/2.Enemy/3 Final Enemy/2.floating/6.png',
        'img/2.Enemy/3 Final Enemy/2.floating/7.png',
        'img/2.Enemy/3 Final Enemy/2.floating/8.png',
        'img/2.Enemy/3 Final Enemy/2.floating/9.png',
        'img/2.Enemy/3 Final Enemy/2.floating/10.png',
        'img/2.Enemy/3 Final Enemy/2.floating/11.png',
        'img/2.Enemy/3 Final Enemy/2.floating/12.png',
        'img/2.Enemy/3 Final Enemy/2.floating/13.png',
    ];

    IMAGES_START = [
        'img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/10.png'
    ];

    IMAGES_BOSSHIT = [
        'img/2.Enemy/3 Final Enemy/Hurt/1.png',
        'img/2.Enemy/3 Final Enemy/Hurt/2.png',
        'img/2.Enemy/3 Final Enemy/Hurt/3.png',
        'img/2.Enemy/3 Final Enemy/Hurt/4.png',
    ]


    IMAGES_DEADBOSS = [
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png',
    ];

    hadFirstContact = false;
    imgCounter = 0;
    otherDirection = false;




    constructor() {
        super().loadImage(this.IMAGES_START[0]);
        this.loadImages(this.IMAGES_START);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEADBOSS);
        this.loadImages(this.IMAGES_BOSSHIT);
        this.x = 2900;
        this.startAnimate();
        this.swimAnimate();
        this.attack();
        // this.reverse();
        this.checkBossHit();
        this.checkDeath();
        // this.leavBossZone();
    };


    startAnimate() {
        let i = setInterval(() => {
            if (world.character.x > 2550 && !this.bossDead()) {

                this.playAnimation(this.IMAGES_START)
                this.imgCounter++
                bossFight_sound.volume= 0.2;
                bossFight_sound.play();
                backgroundSound.pause();
            }
            if (this.imgCounter == 10) {
                this.hadFirstContact = true;
                console.log('startAnimateWorks', this.hadFirstContact)
                clearInterval(i);
            }
        }, 150);
    };


    attack() {
        console.log('attackWorks')
        setInterval(() => {
            if (this.hadFirstContact == true) {
                this.moveLeft();
            }
        }, 1000 / 250);
    };


    swimAnimate() {
        setInterval(() => {
            if (this.imgCounter == 10) {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 150);
    };

    checkBossHit() {
        setInterval(() => {
            if (this.isHurt()) {
                this.playAnimation(this.IMAGES_BOSSHIT);
            }
        }, 150);
    };



    checkDeath() {
        setInterval(() => {
            if (this.bossDead() || world.character.isDead()) {
                this.playAnimation(this.IMAGES_DEADBOSS);
                bossFight_sound.pause();
            }
        }, 150);
    };

  
}
