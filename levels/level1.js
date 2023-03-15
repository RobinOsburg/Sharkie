let level1;

function initLevel() {
    level1 = new Level(

        [
            new PufferFish(),
            new PufferFish(),
            new PufferFish(),
            new PufferFish(),
            new PufferFish(),

            new JellyFish(),
            new JellyFish(),
            new JellyFish(),
            new JellyFish(),
        ],

        [
            new Cloud()
        ],

        [
            new Coins(),
            new Coins(),
            new Coins(),
            new Coins(),
            new Coins(),
            new Coins(),
            new Coins(),
            new Coins(),
        ],

        [
            new Poison(),
            new Poison(),
            new Poison(),
            new Poison(),
            new Poison(),
            new Poison(),
            new Poison(),
            new Poison(),
        ],

        [
            new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', -719, 0),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', -719, 0),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', -719, 0),
            new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', -719, 0),


            new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 0, 0),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 0, 0),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 0, 0),
            new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 0, 0),



            new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 719, 0),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 719, 0),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 719, 0),
            new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 719, 0),


            new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 719 * 2, 0),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 719 * 2, 0),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 719 * 2, 0),
            new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 719 * 2, 0),


            new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 719 * 3, 0),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 719 * 3, 0),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 719 * 3, 0),
            new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 719 * 3, 0),

        ]      
    );
    
}