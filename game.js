kaboom({
    global: true,
    fullscreen: true,
    scale: 1,
    debug: true,
    background: [0, 0, 0],
});
loadRoot("./image/");
loadSprite("coin", "brick.png");
loadSprite("evil-mushroom", "brick.png");
loadSprite("brick", "brick.png");
loadSprite("block", "brick.png");
loadSprite("mario", "brick.png");
loadSprite("mushroom", "brick.png");
loadSprite("suprize", "brick.png");
loadSprite("unboxed", "brick.png");
loadSprite("pipe-top-left", "brick.png");
loadSprite("pipe-top-right", "brick.png");
loadSprite("pipe-bottom-left", "brick.png");
loadSprite("pipe-bottom-right", "brick.png");

scene("game", () => {
    layers(["bj", "obj", "ui"], "obj");
    const map = [
        "                                        ",
        "                                        ",
        "                                        ",
        "                                        ",
        "                                        ",
        "                                        ",
        "                                        ",
        "                                        ",
        "                                        ",
        "==============================     =====",
    ];
    const levelCfg = {
        width: 20,
        height: 20,
        "=": [sprite("brick", solid())],
    };
    const gameLevel = addLevel(map, levelCfg);
});

start("game");
