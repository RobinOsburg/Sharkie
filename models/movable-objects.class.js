class MovableObject extends DrawableObject{
    speed = 0.2;
    otherDirection = false;
    energy = 100;
    lastHit = 0 ;

    

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
        
         return this.x + this.widht > mo.x &&
                this.y + this.height > mo.y &&
                this.x < mo.x &&
                this.y < mo.y + mo.height;
        
    }


    hit(){
        this.energy -= 6;
        if(this.energy < 0){
            this.energy = 0;
        } else{
            this.lastHit = new Date().getTime();
        }
    }

    isHurt(){
        let timepassed = new Date().getTime() - this.lastHit; // Difference in ms
        timepassed = timepassed / 1000; // ms in s
        return timepassed <0.5;
    }
    
    isDead(){
        return this.energy == 0;
    }


}


