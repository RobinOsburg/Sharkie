class MovableObject {
    x = 120;
    y = 250;
    img;
    height = 200;
    widht = 200;
    imageChahe = {};
    currentImage = 0;
    speed = 0.2;

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

    moveRight() {
        console.log('Moving right')
    }



    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }

}
