function updateTilesBasedOnColor () {
    // top right corner
    scene.setTile(0, img`
        6 6 6 6 6 c c 6 6 6 6 6 6 6 c f 
        7 7 7 7 7 c 7 7 7 7 7 7 7 c f c 
        7 7 7 7 c c 7 7 7 7 7 7 c c c 6 
        6 6 6 6 c 6 6 6 6 6 6 c c c 7 6 
        c c c c c c c c c c c c c 7 7 6 
        c 6 7 7 7 7 7 7 7 c c c 6 7 7 6 
        c c 6 6 6 6 6 6 c c c c 6 7 7 6 
        c c c c c c c c c c 6 c 6 7 7 6 
        6 6 6 6 6 6 c c c 6 7 c 6 7 7 6 
        6 6 6 6 6 c c c c 6 7 c 6 7 7 c 
        c c c c c c c 6 c 6 7 c 6 7 7 c 
        6 6 6 c c c 6 6 c 6 7 c 6 7 c c 
        c c c c c c 6 6 c 6 7 c 6 c c c 
        6 6 c c 6 c 6 6 c 6 7 c c c 7 6 
        c f c c 6 c 6 6 c 6 6 c 6 7 7 6 
        f c 6 c 6 c 6 6 c 6 c c 6 7 7 6 
        `, true)
    // top left corner
    scene.setTile(1, img`
        f c 6 6 6 6 6 6 6 c c c c 6 6 6 
        c f c 7 7 7 7 7 7 7 7 c c 7 7 7 
        6 c c c 7 7 7 7 7 7 7 7 c c 7 7 
        6 7 c c c 6 6 6 6 6 6 6 6 c 6 6 
        6 7 7 c c c c c c c c c c c c c 
        6 7 7 6 c c c 6 7 7 7 7 7 7 6 c 
        6 7 7 6 c c c c 6 6 6 6 6 6 6 6 
        6 7 7 6 c 7 c c c c c c c c c c 
        6 7 7 6 c 7 6 c c c 6 6 6 6 6 6 
        c 7 7 6 c 7 6 c c c c 6 6 6 6 6 
        c c c 6 c 7 6 c 6 c c c c c c c 
        6 7 c c c 7 6 c 6 6 c c c 6 6 6 
        6 7 7 6 c 7 6 c 6 6 c c c c c c 
        6 7 7 6 c 7 6 c 6 6 c 6 c c c 6 
        6 7 7 6 c 6 c c 6 6 c 6 c 6 f c 
        6 7 7 6 c c c c 6 6 c 6 c 6 c f 
        `, true)
    // bottom right corner
    scene.setTile(2, img`
        f c 6 c 6 c 6 6 c c c c 6 7 7 6 
        c f 6 c 6 c 6 6 c c 6 c 6 7 7 6 
        6 c c c 6 c 6 6 c 6 7 c 6 7 7 6 
        c c c c c c 6 6 c 6 7 c 6 7 7 6 
        6 6 6 c c c 6 6 c 6 7 c c c 7 6 
        c c c c c c c 6 c 6 7 c 6 c c c 
        6 6 6 6 6 c c c c 6 7 c 6 7 7 c 
        6 6 6 6 6 6 c c c 6 7 c 6 7 7 6 
        c c c c c c c c c c 7 c 6 7 7 6 
        6 6 6 6 6 6 6 6 c c c c 6 7 7 6 
        c 6 7 7 7 7 7 7 6 c c c 6 7 7 6 
        c c c c c c c c c c c c c 7 7 6 
        6 6 c 6 6 6 6 6 6 6 6 c c c 7 6 
        7 7 c c 7 7 7 7 7 7 7 7 c c c 6 
        7 7 7 c c 7 7 7 7 7 7 7 7 c f c 
        6 6 6 c c c c 6 6 6 6 6 6 6 c f 
        `, true)
    // bottom left corner
    scene.setTile(3, img`
        6 7 7 6 c c 6 c 6 6 c 6 c 6 c f 
        6 7 7 6 c 6 6 c 6 6 c 6 c c f c 
        6 7 c c c 7 6 c 6 6 c 6 c c 6 6 
        c c c 6 c 7 6 c 6 6 c c c c c c 
        c c 7 6 c 7 6 c 6 6 c c c 6 6 6 
        c 7 7 6 c 7 6 c 6 c c c c c c c 
        c 7 7 6 c 7 6 c c c c 6 6 6 6 6 
        6 7 7 6 c 7 6 c c c 6 6 6 6 6 6 
        6 7 7 6 c 6 c c c c c c c c c c 
        6 7 7 6 c c c c 6 6 6 6 6 6 c c 
        6 7 7 6 c c c 7 7 7 7 7 7 7 6 c 
        6 7 7 c c c c c c c c c c c c c 
        6 7 c c c 6 6 6 6 6 6 c 6 6 6 6 
        6 c c c 7 7 7 7 7 7 c c 7 7 7 7 
        c f c 7 7 7 7 7 7 7 c 7 7 7 7 7 
        f c 6 6 6 6 6 6 6 c c 6 6 6 6 6 
        `, true)
    // top walls
    scene.setTile(4, img`
        6 6 6 c c 6 6 6 6 6 6 c c 6 6 6 
        7 7 7 7 c 7 7 7 7 7 7 7 c 7 7 7 
        7 7 7 6 c 7 7 7 7 7 7 7 c 7 7 7 
        6 6 6 6 c 6 6 6 6 6 6 6 c c 6 6 
        c c c c c c c c c c c c c c c c 
        c 6 7 7 7 7 7 6 c 6 7 7 7 7 7 6 
        c c 6 6 6 6 6 6 c c 6 6 6 6 6 6 
        c c c c c c c c c c c c c c c c 
        6 6 6 c 6 6 6 6 6 6 6 6 c 6 6 6 
        6 6 6 c c 6 6 6 6 6 6 6 c 6 6 6 
        c c c c c c c c c c c c c c c c 
        c 6 6 6 6 6 6 c c 6 6 6 6 6 6 c 
        c c c c c c c c c c c c c c c c 
        6 6 c c 6 6 6 6 6 6 c c 6 6 6 6 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        `, true)
    // left walls
    scene.setTile(5, img`
        6 7 7 6 c 6 6 c 6 6 c c c 6 c c 
        6 7 7 6 c 7 6 c 6 6 c 6 c 6 c c 
        6 7 7 c c 7 6 c 6 6 c 6 c 6 c c 
        c c c c c 7 6 c c c c 6 c 6 c c 
        c 7 7 6 c 7 6 c 6 6 c 6 c c c c 
        6 7 7 6 c 7 6 c 6 6 c 6 c c c c 
        6 7 7 6 c 6 c c 6 6 c 6 c 6 c c 
        6 7 7 6 c c c c 6 6 c c c 6 c c 
        6 7 7 6 c 6 6 c 6 6 c c c 6 c c 
        6 7 7 6 c 7 6 c 6 6 c 6 c 6 c c 
        6 7 7 6 c 7 6 c 6 6 c 6 c 6 c c 
        c c c c c 7 6 c 6 c c 6 c 6 c c 
        c 7 6 6 c 7 6 c c c c 6 c c c c 
        6 7 7 6 c 7 6 c 6 6 c 6 c c c c 
        6 7 7 6 c 6 c c 6 6 c 6 c 6 c c 
        6 7 7 6 c c c c 6 6 c c c 6 c c 
        `, true)
    // bottom walls
    scene.setTile(6, img`
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        6 6 6 6 c c 6 6 6 6 6 6 c c 6 6 
        c c c c c c c c c c c c c c c c 
        c 6 6 6 6 6 6 c c 6 6 6 6 6 6 c 
        c c c c c c c c c c c c c c c c 
        6 6 6 c 6 6 6 6 6 6 6 c c 6 6 6 
        6 6 6 c 6 6 6 6 6 6 6 6 c 6 6 6 
        c c c c c c c c c c c c c c c c 
        6 6 6 6 6 6 c c 6 6 6 6 6 6 c c 
        6 7 7 7 7 7 6 c 6 7 7 7 7 7 6 c 
        c c c c c c c c c c c c c c c c 
        6 6 c c 6 6 6 6 6 6 6 c 6 6 6 6 
        7 7 7 c 7 7 7 7 7 7 7 c 6 7 7 7 
        7 7 7 c 7 7 7 7 7 7 7 c 7 7 7 7 
        6 6 6 c c 6 6 6 6 6 6 c c 6 6 6 
        `, true)
    // right walls
    scene.setTile(7, img`
        c c 6 c c c 6 6 c c c c 6 7 7 6 
        c c 6 c 6 c 6 6 c c 6 c 6 7 7 6 
        c c c c 6 c 6 6 c 6 7 c 6 7 7 6 
        c c c c 6 c c c c 6 7 c 6 6 7 c 
        c c 6 c 6 c c 6 c 6 7 c c c c c 
        c c 6 c 6 c 6 6 c 6 7 c 6 7 7 6 
        c c 6 c 6 c 6 6 c 6 7 c 6 7 7 6 
        c c 6 c c c 6 6 c 6 6 c 6 7 7 6 
        c c 6 c c c 6 6 c c c c 6 7 7 6 
        c c 6 c 6 c 6 6 c c 6 c 6 7 7 6 
        c c c c 6 c 6 6 c 6 7 c 6 7 7 6 
        c c c c 6 c 6 6 c 6 7 c 6 7 7 c 
        c c 6 c 6 c c c c 6 7 c c c c c 
        c c 6 c 6 c 6 6 c 6 7 c c 7 7 6 
        c c 6 c 6 c 6 6 c 6 7 c 6 7 7 6 
        c c 6 c c c 6 6 c 6 6 c 6 7 7 6 
        `, true)
    // top door
    scene.setTile(8, img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 4 4 4 4 4 4 4 4 4 4 4 4 7 7 
        7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 
        4 1 1 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 1 4 1 4 1 1 1 4 1 1 1 4 1 1 4 
        4 1 4 1 4 1 4 1 4 1 4 1 4 1 4 4 
        4 1 1 4 4 1 1 1 4 1 1 1 4 1 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 1 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 1 1 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 1 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 1 1 1 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        `, true)
    // left door
    scene.setTile(9, img`
        3 3 3 c c c c c c c c c c c c c 
        3 3 c c c c c c c c c c c c c c 
        3 c c c c c c c c c c c c c c c 
        3 1 1 c c c c c c c c c c c c c 
        3 1 c 1 c 1 1 1 c 1 1 1 c 1 1 c 
        3 1 c 1 c 1 c 1 c 1 c 1 c 1 c c 
        3 1 1 c c 1 1 1 c 1 1 1 c 1 c c 
        3 c c c c c c c c c c c c c c c 
        3 c c c c c c c c c c c c c c c 
        3 c c c c c c 1 1 c c c c c c c 
        3 c c c c c 1 c c 1 c c c c c c 
        3 c c c c c c c 1 c c c c c c c 
        3 c c c c c c 1 c c c c c c c c 
        3 c c c c c 1 1 1 1 c c c c c c 
        3 3 c c c c c c c c c c c c c c 
        3 3 3 c c c c c c c c c c c c c 
        `, true)
    // right door
    scene.setTile(10, img`
        a a a a a a a a a a a a a 3 3 3 
        a a a a a a a a a a a a a a 3 3 
        a a a a a a a a a a a a a a a 3 
        a 1 1 a a a a a a a a a a a a 3 
        a 1 a 1 a 1 1 1 a 1 1 1 a 1 1 3 
        a 1 a 1 a 1 a 1 a 1 a 1 a 1 a 3 
        a 1 1 a a 1 1 1 a 1 1 1 a 1 a 3 
        a a a a a a a a a a a a a a a 3 
        a a a a a a a 1 1 1 a a a a a 3 
        a a a a a a a a a a 1 a a a a 3 
        a a a a a a a a 1 1 a a a a a 3 
        a a a a a a a a a a 1 a a a a 3 
        a a a a a a a 1 1 1 a a a a a 3 
        a a a a a a a a a a a a a a a 3 
        a a a a a a a a a a a a a a 3 3 
        a a a a a a a a a a a a a 3 3 3 
        `, true)
    // bottom door
    scene.setTile(11, img`
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 1 1 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 1 6 1 6 1 1 1 6 1 1 1 6 1 1 6 
        6 1 6 1 6 1 6 1 6 1 6 1 6 1 6 6 
        6 1 1 6 6 1 1 1 6 1 1 1 6 1 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 1 6 6 1 6 6 6 6 6 
        6 6 6 6 6 6 6 1 6 6 1 6 6 6 6 6 
        6 6 6 6 6 6 6 1 1 1 1 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 1 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 1 6 6 6 6 6 
        7 6 6 6 6 6 6 6 6 6 6 6 6 6 6 7 
        7 7 6 6 6 6 6 6 6 6 6 6 6 6 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `, true)
    // normal floor
    scene.setTile(12, img`
        b d d d d d d d d d d d d d d c 
        d b b b b b b b b b b b b b b c 
        d b b b b b b b b b b b b b b c 
        d b b b b b b b b b b b b b b c 
        d b b b b b b b b b b b b b b c 
        d b b b b b b b b b b b b b b c 
        d b b b b b b b b b b b b b b c 
        d b b b b b b b b b b b b b b c 
        d b b b b b b b b b b b b b b c 
        d b b b b b b b b b b b b b b c 
        d b b b b b b b b b b b b b b c 
        d b b b b b b b b b b b b b b c 
        d b b b b b b b b b b b b b b c 
        d b b b b b b b b b b b b b b c 
        d b b b b b b b b b b b b b b c 
        c c c c c c c c c c c c c c c a 
        `, false)
    for (let index = 0; index < 4; index++) {
        mySprite = sprites.create(img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 5 d f . . 
            . . . . b 5 5 1 f f 5 d 4 c . . 
            . . . . b 5 5 d f b d d 4 4 . . 
            . b b b d 5 5 5 5 5 4 4 4 4 4 b 
            b d d d b b d 5 5 4 4 4 4 4 b . 
            b b d 5 5 5 b 5 5 5 5 5 5 b . . 
            c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
            c b d c d 5 5 b 5 5 5 5 5 5 b . 
            . c d d c c b d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        scene.placeOnRandomTile(mySprite, 13)
    }
    // floor with enemy
    scene.setTile(13, img`
        b d d d d d d d d d d d d d d c 
        d b b b b b b b b b b b b b b c 
        d b b b b b b b b b b b b b b c 
        d b b b b b b b b b b b b b b c 
        d b b b b b b b b b b b b b b c 
        d b b b b b b b b b b b b b b c 
        d b b b b b b b b b b b b b b c 
        d b b b b b b b b b b b b b b c 
        d b b b b b b b b b b b b b b c 
        d b b b b b b b b b b b b b b c 
        d b b b b b b b b b b b b b b c 
        d b b b b b b b b b b b b b b c 
        d b b b b b b b b b b b b b b c 
        d b b b b b b b b b b b b b b c 
        d b b b b b b b b b b b b b b c 
        c c c c c c c c c c c c c c c a 
        `, false)
    // floor w/ chest
    scene.setTile(14, assets.image`Locked`, false)
    // floor w/ hole
    scene.setTile(15, img`
        c c c c c c c c c c c c c c c c 
        b b b c c c b b b b c c c c c d 
        f f c c c c f f f f f c c c f f 
        c c f f f f f c c c f f f f f c 
        f f f c c c f f f f f f c c f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        `, false)
    tiles.coverAllTiles(tiles.util.door0, sprites.dungeon.doorOpenNorth)
    tiles.coverAllTiles(tiles.util.door6, sprites.dungeon.doorOpenWest)
    tiles.coverAllTiles(tiles.util.door9, sprites.dungeon.doorOpenEast)
    tiles.coverAllTiles(tiles.util.door15, sprites.dungeon.doorOpenSouth)
    tiles.coverAllTiles(assets.tile`chestLocked`, sprites.dungeon.chestClosed)
    for (let value of tiles.getTilesByType(sprites.dungeon.doorOpenEast)) {
        tiles.setWallAt(value, false)
    }
}
function updateTilesByPlaceholder () {
	
}
let mySprite: Sprite = null
scene.setTileMap(img`
    1 4 4 4 8 8 4 4 4 . 
    5 c c c c c c c c 7 
    5 c f c d d c d c 7 
    9 c d c c c c c c a 
    9 c c c c f c d c a 
    5 c e c c c c c c 7 
    5 c c c c e c c c 7 
    3 6 6 6 b b 6 6 6 2 
    `, TileScale.Sixteen)
pause(2000)
updateTilesBasedOnColor()
