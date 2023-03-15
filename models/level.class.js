class Level {
    enemies;
    clouds;
    coins;
    poison;
    backgroundObjects;
    throwableObjects;

    level_end_x = 2200;

    constructor(enemies, clouds, coins, poison, backgroundObjects, throwableObjects) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.coins = coins;
        this.poison = poison;
        this.backgroundObjects = backgroundObjects;
        this.throwableObjects = throwableObjects;
    };
}