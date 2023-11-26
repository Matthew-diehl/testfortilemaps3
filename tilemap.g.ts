// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "tilemapExample":
            case "level1":return tiles.createTilemap(hex`0a000800100f0f0f06050f0f0f110c14141414141414140e0c1409191a1b1c09140e011415180b14141f200702141617140a142122080c14140914140914140e0c14141d1e231414140e130d0d0d03040d0d0d12`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,tiles.util.door0,tiles.util.door5,tiles.util.door6,tiles.util.door3,tiles.util.door9,tiles.util.door12,tiles.util.door10,tiles.util.door15,tiles.util.object4,tiles.util.object5,tiles.util.object10,tiles.util.arrow1,tiles.util.arrow0,tiles.util.arrow4,tiles.util.arrow5,tiles.util.arrow2,tiles.util.arrow3,tiles.util.arrow7,tiles.util.arrow6,tiles.util.object7,sprites.dungeon.doorClosedWest,sprites.dungeon.doorClosedSouth,sprites.dungeon.doorClosedNorth,sprites.dungeon.doorClosedEast,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.floorDark2,sprites.dungeon.floorLight0,sprites.dungeon.doorOpenWest,sprites.dungeon.doorOpenSouth,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenEast,sprites.dungeon.chestClosed], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "chestLocked":
            case "tile1":return tile1;
            case "Left":
            case "tile2":return tile2;
            case "right":
            case "tile3":return tile3;
            case "down":
            case "tile4":return tile4;
            case "up":
            case "tile5":return tile5;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
