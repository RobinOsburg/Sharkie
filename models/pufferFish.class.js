class PufferFish extends MovableObject {


    IMAGES_WALKING = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png'
    ];

    IMAGES_TRANSITION = [
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png',

    ];

    IMAGES_BUBBLESWIM = [
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim5.png',
    ];


    IMAGES_DEAD = [
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 3 (can animate by going down to the floor after the Fin Slap attack).png',

    ];

    constructor() {

        super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_TRANSITION);
        this.loadImages(this.IMAGES_BUBBLESWIM);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 500 + Math.random() * 500;
        this.y = 50 + Math.random() * 400; 
        this.height = 60;
        this.widht = 60;
        this.animate();
        this.checkPufferHit();
        this.PufferIsKilledByCharacter();
        this.speed = 0.2 + Math.random() * 0.2;
    }

    // animate() {
    //     setInterval(() => {
    //         this.moveLeft();
    //     }, 1000 / 60);

    //     setInterval(() => {
    //         this.playAnimation(this.IMAGES_WALKING);
    //     }, 250);
    // };



 //--------------------------------------------------------
    
    animate() {
        setStoppableInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
        let i = 0;
        setStoppableInterval(() => {
            this.playAnimation(this.IMAGES_WALKING); 
             if (i < 5) {
                    this.playAnimation(this.IMAGES_TRANSITION);                    
                } else {
                    this.playAnimation(this.IMAGES_BUBBLESWIM);

                i++;
            }    
        }, 800); 
       
    }

    checkPufferHit(){
        setInterval(() => {
            if (this.isHurt()){
                this.PufferIsKilledByCharacter();
            }
        }, 150); 
    }
    
    
    PufferIsKilledByCharacter() {
        this.speed = 0;
        this.y -= 15;
        this.playAnimation(this.IMAGES_DEAD);
    }

 //--------------------------------------------------------

}