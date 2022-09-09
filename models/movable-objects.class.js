class MovableObject {
    x = 120;
    y = 250;
    img;
    height = 200;
    widht = 200;
    imageChahe = {};
    currentImage = 0;
    speed = 0.2;
    otherDirection = false;
    energy = 100;
    lastHit = 0 ;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageChahe[path] = img;
        });
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.widht, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof PufferFish || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.widht, this.height);
            ctx.stroke();
        }
    }

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
        this.img = this.imageChahe[path];
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


