class World {
    character = new Character();
    endboss = new Endboss();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    // coinBar = new CoinBar();
    poisonBar = new PoisonBar();
    endbossBar = new Endbossbar();
    throwableObjects = [];



    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.swim();
        this.checkThrowObjects();
        // this.checkCoinCollisions();
        this.checkPoisonCollisions();
        this.checkBubbleCollisions();
        this.checkBossCollisions();
        this.checkCollisions();
        this.restartGame();
        this.attackPuffer();

    };


    setWorld() {
        this.character.world = this;
    };


    swim() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
            // this.checkCoinCollisions();
            this.checkPoisonCollisions();
            this.checkBubbleCollisions();
            this.attackPuffer();
            this.bubbleHitPufferfish();

        }, 200);
    };



    checkThrowObjects() {
        if (this.keyboard.space && this.character.poisonEnergy >= 10 && this.endboss.hadFirstContact == true ) {
            let bubble = new ThrowableObject(this.character.x + 150, this.character.y + 100);
            this.throwableObjects.push(bubble);
            this.character.cashPoison();
            this.poisonBar.setPercantage(this.character.poisonEnergy);
            bubble_sound.play();
        }
    };


    attackPuffer() {
        if (this.keyboard.space && this.character.poisonEnergy >= 10 && !this.character.otherDirection) {
            let bubble = new ThrowableObject(this.character.x + 150, this.character.y + 100);
            this.throwableObjects.push(bubble);
            this.character.cashPoison();
            this.poisonBar.setPercantage(this.character.poisonEnergy);
            bubble_sound.play();
        }
    };



    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBar.setPercantage(this.character.energy);
                sharkie_hit.play();
                sharkie_hit.volume = 0.2;
            }
            if (this.character.isDead()) {
                this.cancelAllId();
                this.replaceCanvas();
                document.getElementById('endScreen').innerHTML = '';
                document.getElementById('endScreen').innerHTML += this.renderGameOver();
                backgroundSound.pause();
                swimming_sound.pause();
                gameOver_sound.play();
            }
        });
        this.checkBossCollisions();
    };






    bubbleHitPufferfish() {
        this.throwableObjects.forEach((bubble, i) => {
          this.level.enemies.forEach((enemy) => {
            if ( enemy.isColliding(bubble)) {
              enemy.pufferHit();
              this.throwableObjects.splice(i, 1)
            }
          });
        });
      }



    replaceCanvas() {
        document.getElementById('hud').classList.remove('HUD');
        document.getElementById('hud').classList.add('d-none');
        document.getElementById('canvas').classList.add('d-none');
    }



    checkBossCollisions() {
        if (this.character.isColliding(this.endboss)) {
            this.character.hit();
            this.statusBar.setPercantage(this.character.energy);
        }
        if (this.endboss.bossDead()) {
            this.cancelAllId();
            this.replaceCanvas();
            document.getElementById('endScreen').innerHTML = '';
            document.getElementById('endScreen').innerHTML += this.renderWonGame();
            backgroundSound.pause();
            win_sound.play();
        }
    };




    // checkCoinCollisions() {
    //     this.level.coins.forEach((coin, index) => {
    //         if (this.character.isColliding(coin)) {
    //             this.character.collectCoin();
    //             this.level.coins.splice(index, 1);
    //             this.coinBar.setPercantage(this.character.coinEnergy);
    //             coin_sound.volume = 0.2;
    //             coin_sound.play()
    //         }
    //     });
    // };


    checkPoisonCollisions() {
        this.level.poison.forEach((poison, index) => {
            if (this.character.isColliding(poison)) {
                this.character.collectPoison();
                this.level.poison.splice(index, 1);
                this.poisonBar.setPercantage(this.character.poisonEnergy);
                coin_sound.volume = 0.2;
                coin_sound.play()

            }
        });
    };


    checkBubbleCollisions() {
        this.throwableObjects.forEach((bubble, i) => {
            if (this.endboss.isColliding(bubble)) {
                this.endboss.bossHit();
                this.throwableObjects.splice(i, 1)
                this.endbossBar.setPercantage(this.endboss.bossEnergy);
                bossHit_sound.play();
            }
        });
    };


    renderGameOver() {
        return /*html*/`
        <div>
            <img src="img/6.Botones/Tittles/Game Over/Recurso 9.png" >
        </div>

        <div>
            <button class="tryAgainBtn" onclick="world.restartGame()">Try Again</button>
        </div>
        `
    };


    renderWonGame() {
        return  /*html*/`
        <div class = "winImg">
            <img src="img/6.Botones/Try again/Mesa de trabajo 1.png" >
        </div>

        <div>
            <button class="tryAgainBtn" onclick="world.restartGame()">Try Again</button>
        </div>
        `
    };


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.drawBars();
        this.allObjects();
        this.ctx.translate(-this.camera_x, 0);
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    };


    allObjects() {
        this.addObjectsToMap(this.level.clouds);
        // this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.poison);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);
        this.addToMap(this.character);
        this.addToMap(this.endboss);
    }


    drawBars() {
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        // this.addToMap(this.coinBar);
        this.addToMap(this.poisonBar);
        this.addToMap(this.endbossBar);
        this.ctx.translate(this.camera_x, 0);
    }


    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    };


    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    };


    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.widht, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    };


    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    };


    
    // GameOver

    cancelAllId() {
        var cancelAllId = setTimeout(function () {
            for (var i = cancelAllId; i > 0; i--) clearInterval(i)
        }, 100);
    };


    restartGame() {
        if (this.character.isDead() || this.endboss.bossDead()) {
            window.location.reload(true);

        }
    };
}