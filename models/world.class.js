class World {
    character = new Character();
    enemies = [
        new PufferFish(),
        new PufferFish(),
        new PufferFish(),
    ];

    clouds = [
        new Cloud()
    ];

    backgroundObject = [
        new BackgroundObject('img/3. Background/Layers/5. Water/L1.png', 0, 0),
        new BackgroundObject('img/3. Background/Legacy/Layers/4.Fondo 2/D1.png', 0, 0),
        new BackgroundObject('img/3. Background/Legacy/Layers/4.Fondo 2/L2.png', 0, 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/L.png', 0, 0),

    ]

    canvas;
    ctx; // == Context

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addObjectsToMap(this.backgroundObject);
        this.addObjectsToMap(this.clouds);
        this.addObjectsToMap(this.enemies);
        this.addToMap(this.character);


        // Draw() wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }


    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.widht, mo.height);
    }
}