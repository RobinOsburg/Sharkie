class PoisonBar extends DrawableObject {

    IMAGES = [
        'img/4. Marcadores/orange/100_ copia.png',
        'img/4. Marcadores/orange/80_ copia.png',
        'img/4. Marcadores/orange/60_ copia.png',
        'img/4. Marcadores/orange/40_ copia.png',
        'img/4. Marcadores/orange/20_ copia.png',
        'img/4. Marcadores/orange/0_ copia.png'
    ];

    height= 50;
    widht= 140;
    percentage = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 1;
        this.y =  40;
        this.setPercantage(0);
    };


    setPercantage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    };

    resolveImageIndex() {

        if (this.percentage == 0) {
            return 5;
        } else if (this.percentage == 20) {
            return 4;

        } else if (this.percentage == 40) {
            return 3;

        } else if (this.percentage == 60) {
            return 2;

        } else if (this.percentage == 80) {
            return 1;

        } else {
            return 0;
        }
    };
}