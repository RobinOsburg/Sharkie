class MovableObject{
    x = 120;
    y = 250;
    img;
    height = 200;
    widht = 200;

    loadImage(path){
        this.img = new Image();
        this.img.src= path;
    }

    moveRight() {
        console.log('Moving right')
    }

    moveLeft(){

        
    }
}
