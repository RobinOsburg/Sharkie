class ThrowableObject extends MovableObject {

    constructor(x, y) {
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png');
        this.x = x;
        this.y = y;
        this.height = 40;
        this.widht = 40;
        this.attack();
    };


    attack() {
        this.speedX = 30;
        if (!world.character.otherDirection) {
            console.log('shoot right');
            this.attackRight();
        } else if (world.character.otherDirection){
            console.log('shoot left')
            this.attackLeft();  
        }
    };


    attackLeft(){
        setInterval(() => {
            this.x -= 10;
        }, 10/0.3);
    };


    attackRight(){
        setInterval(() => {
            this.x += 10;
        }, 10/0.3);
    };
}