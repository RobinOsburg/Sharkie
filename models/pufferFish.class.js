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
        this.x = 600 + Math.random() * 500;
        this.y = 50 + Math.random() * 500; 
        this.height = 60;
        this.widht = 60;
        this.animate();
        this.checkPufferHit();
        this.speed = 0.2 + Math.random() * 0.2;
    }

  
    
 animate() {
    let i = 0;
    this.intervalId = setStoppableInterval(() => {
      this.moveLeft();
    }, 1000 / 60);
    
    this.animationId = setStoppableInterval(() => {
      if (this.pufferFishEnergy == 0) {
        clearInterval(this.intervalId);
        clearInterval(this.animationId);
        this.loadImage('img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 3 (can animate by going down to the floor after the Fin Slap attack).png');
      } else {
        if (i < 5) {
          this.playAnimation(this.IMAGES_TRANSITION);
        } else {
          this.playAnimation(this.IMAGES_BUBBLESWIM);
        }
        i++;
        if (i > 9 ) {
          i = 0;
          this.playAnimation(this.IMAGES_WALKING);
        }
      }
    }, 200);
  }
  
  checkPufferHit() {
    setInterval(() => {
      if (this.isHurt()) {
        this.speed = 0;
        const moveUpInterval = setInterval(() => {
          this.y -= 5; // move up by 5 pixels per interval
          if (this.y < -100) {
            clearInterval(moveUpInterval); // stop the interval when the image is out of the canvas
          }
        }, 50);
      }
    }, 150); 
  }


}