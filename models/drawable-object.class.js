class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x = 120;
    y = 250;
    height = 200;
    widht = 200;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    };

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.widht, this.height);
    };


    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    };

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof PufferFish || this instanceof JellyFish || this instanceof purpleJellyFish ||  this instanceof Poison || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            // ctx.rect(this.x ,this.y, this.widht, this.height);
            ctx.stroke();
        }
    };

}