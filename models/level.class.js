class Level {
    enemies;
    clouds;
    poison;
    backgroundObjects;
    throwableObjects;

    level_end_x = 3100;

    constructor(enemies, clouds,  poison, backgroundObjects, throwableObjects) {
        this.enemies = enemies;
        this.clouds = clouds;
        // this.coins = coins;
        this.poison = poison;
        this.backgroundObjects = backgroundObjects;
        this.throwableObjects = throwableObjects;
    };
}