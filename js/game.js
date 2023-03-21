let canvas;
let world;
let intervalIDs = [];
let keyboard = new Keyboard();
backgroundSound = new Audio('audio/backgroundSound.mp3');
bossFight_sound = new Audio('audio/bossFight.mp3');
win_sound = new Audio('audio/win.mp3');
swimming_sound = new Audio('audio/swim.mp3');
shock_sound = new Audio('audio/shock.mp3');
bubble_sound = new Audio('audio/bubble.mp3');
coin_sound = new Audio('audio/coin.mp3');
bossHit_sound = new Audio('audio/getHit.mp3');
sharkie_hit = new Audio('audio/sharkie_hit.mp3');
gameOver_sound = new Audio('audio/gameOver.mp3');
win_sound = new Audio('audio/win.mp3');


function init() {
    canvasContainer = document.getElementById('canvasContainer');
    if (/Mobi/.test(navigator.userAgent) && window.innerWidth < window.innerHeight) {
        canvasContainer.innerHTML =  /*html*/`
        <div class="startScreen">
            <span>Please switch to Landscape Mode and reload</span>
            <img onclick="reload()" src="img/reload.ico">
        </div>
        `
    } else {
        canvasContainer.innerHTML = /*html*/`
        <div id="startScreen" class="startScreen">
       <div class="introText">Collect Poison&nbsp; <img class="introImg" src="img/4. Marcadores/green/100_ copia 5.png"> </div>
       <div class="introText">Shoot or dodge enemies &nbsp;   <img class="introImg" src="img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png" >&nbsp;  <img class="introImg" src="img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png"></div>
       <div class="introText"> Beat the Endboss <img class="introEndbossImg" src="img/2.Enemy/3 Final Enemy/1.Introduce/10.png"></div>
       
       <div onclick="startGame()" class="startGame"><button class="startGameBtn">Start Game</button></div>
   </div>
   `}
};

function reload(){
    window.location.reload(true);
}

function setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    intervalIDs.push(id);

}


function mobileHud() {
    document.getElementById("left").addEventListener("touchstart", (e) => {
        e.preventDefault()
        keyboard.left = true
    })

    document.getElementById("left").addEventListener("touchend", (e) => {
        e.preventDefault()
        keyboard.left = false
    })

    document.getElementById("right").addEventListener("touchstart", (e) => {
        e.preventDefault()
        keyboard.right = true
    })

    document.getElementById("right").addEventListener("touchend", (e) => {
        e.preventDefault()
        keyboard.right = false
    })

    document.getElementById("space").addEventListener("touchstart", (e) => {
        e.preventDefault()
        keyboard.space = true
    })

    document.getElementById("space").addEventListener("touchend", (e) => {
        e.preventDefault()
        keyboard.space = false
    })

    document.getElementById("up").addEventListener("touchstart", (e) => {
        e.preventDefault()
        keyboard.up = true
    })

    document.getElementById("up").addEventListener("touchend", (e) => {
        e.preventDefault()
        keyboard.up = false
    })

    document.getElementById("down").addEventListener("touchstart", (e) => {
        e.preventDefault()
        keyboard.down = true
    })

    document.getElementById("down").addEventListener("touchend", (e) => {
        e.preventDefault()
        keyboard.down = false
    })


}


window.addEventListener('keydown', (e) => {
    if (e.keyCode == 39) {
        keyboard.right = true;
    }
    if (e.keyCode == 37) {
        keyboard.left = true;
    }
    if (e.keyCode == 38) {
        keyboard.up = true;
    }
    if (e.keyCode == 40) {
        keyboard.down = true;
    }
    if (e.keyCode == 32) {
        keyboard.space = true;
    }
   

});


window.addEventListener('keyup', (e) => {
    if (e.keyCode == 39) {
        keyboard.right = false;
    }
    if (e.keyCode == 37) {
        keyboard.left = false;
    }
    if (e.keyCode == 38) {
        keyboard.up = false;
    }
    if (e.keyCode == 40) {
        keyboard.down = false;
    }
    if (e.keyCode == 32) {
        keyboard.space = false;
    }
  

});


function fullScreen() {
    let fullScreen = document.getElementById('canvas');
    enterFullscreen(fullScreen);
}


function enterFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) {      // for IE11 (remove June 15, 2022)
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {  // iOS Safari
        element.webkitRequestFullscreen();
    }
};


function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
};


function soundOn() {
    this.backgroundSound.volume = 0.2;
    this.backgroundSound.muted = false;
    this.bossFight_sound.volume = 0.2;
    this.bossFight_sound.muted = false;
    this.win_sound.volume = 0.2;
    this.win_sound.muted = false;
    this.swimming_sound.volume = 0.2;
    this.swimming_sound.muted = false;
    this.shock_sound.volume = 0.2;
    this.shock_sound.muted = false;
    this.bubble_sound.volume = 0.2;
    this.bubble_sound.muted = false;
    this.coin_sound.volume = 0.2;
    this.coin_sound.muted = false;
    this.bossHit_sound.volume = 0.2;
    this.bossHit_sound.muted = false;
    this.sharkie_hit.volume = 0.2;
    this.sharkie_hit.muted = false;
    this.gameOver_sound.volume = 0.2;
    this.gameOver_sound.muted = false;
    this.win_sound.volume = 0.2;
    this.win_sound.muted = false;
}


function soundOff() {
    this.backgroundSound.muted = true;
    this.bossFight_sound.muted = true;
    this.win_sound.muted = true;
    this.swimming_sound.muted = true;
    this.shock_sound.muted = true;
    this.bubble_sound.muted = true;
    this.coin_sound.muted = true;
    this.bossHit_sound.muted = true;
    this.sharkie_hit.muted = true;
    this.gameOver_sound.muted = true;
    this.win_sound.muted = true;
}


function startGame() {
    // if (window.matchMedia("(orientation: portrait)").matches) {
    //     document.getElementById('startScreen').innerHTML =  /*html*/`
    //    <div><span>Please switch to Landscape Modus</span></div>
    //    `
    // } else {
    addAndRemoveClasses();
    initLevel();
    world = new World(canvas, keyboard);
    this.backgroundSound.volume = 0.2;
    this.backgroundSound.play();
    this, renderFullscreenBtn();
    this.mobileHud();
    this.checkMobile();
    // }
};


function addAndRemoveClasses() {
    sound = document.getElementById('sound');
    sound.classList.remove('d-none');
    sound.classList.add('iconPosition');
    canvasContainer = document.getElementById('canvasContainer');
    canvasContainer.classList.remove('canvasContainer');
    canvasContainer.classList.add('d-none');
    startScreen = document.getElementById('startScreen');
    startScreen.classList.remove('startScreen');
    startScreen.classList.add('d-none');
    canvas = document.getElementById('canvas');
    canvas.classList.remove('d-none');
};


function checkMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        document.getElementById('fullscreen').classList.add('d-none')
        hud = document.getElementById('hud');
        hud.classList.remove('d-none');
        hud.classList.add('HUD');
    };
};


function renderFullscreenBtn() {
    document.getElementById('endScreen').innerHTML += `
    <div onclick="fullScreen()" id="fullscreen">
    <span class="fullScrennText">--->&nbsp;FULLSCREEN&nbsp;<---</span>
    </div>`;
};



