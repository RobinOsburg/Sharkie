class BackgroundObject extends MovableObject {

    widht = 720;
    height = 480;
    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.y = y;
        this.x = x;
    };
}