let canvas;
let ctx;
let charackter = new Image()



function init(){
    canvas= document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    charackter.src = '../img/1.Sharkie/1.IDLE/1.png';

    ctx.drawImage(charackter,20,20,50,150);

}