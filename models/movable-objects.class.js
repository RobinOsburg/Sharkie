class MovableObject extends DrawableObject {
    speed = 0.2;
    otherDirection = false;
    energy = 100;
    lastHit = 0;
    coinBar = 0;
    coinEnergy = 0;
    poisonBar = 0;
    poisonEnergy = 0;
    bossEnergy = 100;
    pufferFishEnergy = 10;
    jellyFishEnergy = 10;
    purpleJellyFishEnergy = 10;


   offset = {
    top:0,
    left:0,
    right:0,
    bottom:0
   }; 

    moveDown() {
        this.y += this.speed;
    }

    moveUp() {
        this.y -= this.speed;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }
    

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    isColliding(mo) {
        return this.x + this.widht - this.offset.right > mo.x +mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.widht -mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }


    hit() {
        this.energy -= 6;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    bossHit() {
        this.bossEnergy -= 20;
        if (this.bossEnergy < 0) {
            this.bossEnergy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    };


    pufferHit() {
        this.pufferFishEnergy -= 10;
        if (this.pufferFishEnergy < 0) {
            this.pufferFishEnergy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    };


    jellyHit() {
        this.jellyFishEnergy -= 10;
        if (this.jellyFishEnergy < 0) {
            this.jellyFishEnergy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    };


    purpleJellyHit() {
        this.purpleJellyFishEnergy -= 10;
        if (this.purpleJellyFishEnergy < 0) {
            this.purpleJellyFishEnergy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    };


    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // Difference in ms
        timepassed = timepassed / 1000; // ms in s
        return timepassed < 0.25;
    };


    isDead() {
        return this.energy == 0;
    };


    bossDead() {
        return this.bossEnergy == 0;
    };


    collectCoin() {
        this.coinEnergy += 20;
        if (this.coinEnergy > 100) {
            this.coinEnergy = 100;
        }
    };


    collectPoison() {
        this.poisonEnergy += 20;
        if (this.poisonEnergy > 100) {
            this.poisonEnergy = 100;
        }
    };


    cashPoison() {
        this.poisonEnergy -= 20;
        if (this.poisonEnergy == 0) {
            this.poisonEnergy = 0;
        }
    };
}


