// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10002000090808080808080808080808080808070212010101010101010101010101010302010101010101010101010101010103020a050505050505050505050e0e0d03020301010101010101010101010102030203010101010101010101010101020302030101010101010101010101010203020b080808080f0f0f0f080808080c030201010101010101010101010101010302010101010101010101010101010103020101010a0505050505050d01010103020101010301011111010110010101030201010103010101010101100101010302010101030101010101011001010103020101010b08080f0f08080c0101010302010101030101010101010201010103020101010301010101010102010101030201010103010113131313020101010302010101030101010101010201010103020101010313131313010102010101030201010103010101010101020101010302010101030101010101010201010103020101010301011313131302010101030201010103010101010101020101010302010101030101010101010201010103020101010b08080e0e08080c01010103020101010a0505010105050d01010103020101010301010101010114010101030201010103010101010101140101010302010101030101010101011401010103020101010b0808080808080c0101010304050505050505050505050505050506`, img`
2222222222222222
2..............2
2..............2
222222222222..22
22............22
22............22
22............22
222222....222222
2..............2
2..............2
2...22222222...2
2...2......2...2
2...2......2...2
2...2......2...2
2...222..222...2
2...2......2...2
2...2......2...2
2...2..22222...2
2...2......2...2
2...22222..2...2
2...2......2...2
2...2......2...2
2...2..22222...2
2...2......2...2
2...2......2...2
2...222..222...2
2...222..222...2
2...2..........2
2...2..........2
2...2..........2
2...22222222...2
2222222222222222
`, [myTiles.transparency16,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.stairNorth,sprites.dungeon.stairSouth,sprites.dungeon.greenOuterWest1,sprites.dungeon.chestClosed,sprites.dungeon.collectibleInsignia,sprites.dungeon.doorClosedNorth,sprites.dungeon.stairWest], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
