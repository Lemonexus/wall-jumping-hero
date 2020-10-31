controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (ashley.isHittingTile(CollisionDirection.Bottom) || ashley.isHittingTile(CollisionDirection.Right) || ashley.isHittingTile(CollisionDirection.Left)) {
        ashley.vy = -250
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    ashley.setImage(leftFacingImg)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    ashley.setImage(rightFacingImg)
})
let ashley: Sprite = null
let leftFacingImg: Image = null
let rightFacingImg: Image = null
rightFacingImg = img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f f f . . . 
    . . . . f f f f e e e e e f . . 
    . . . f e e e e e e e e e f . . 
    . . f e e e e e e e e e e f . . 
    . . f e e e e e e e e e e e f . 
    . . f e e e e e e e e e e e f . 
    . . f e e e e f f e e e e e f . 
    . f f e e e e f b f e e e f . . 
    . f e e e e e e 1 f 4 4 e . . . 
    . f e e e e e f 4 4 4 4 f . . . 
    . . f e e e d d d d d d f . . . 
    . . . f f f 3 8 2 d f f f . . . 
    . . . f d d d d d d d d d f . . 
    . . . . f f f d d d d f f f . . 
    . . . . . f f f f f f f f . . . 
    `
leftFacingImg = img`
    . . . f e e f f f f . . . . . . 
    . . f e e e e e f e f f . . . . 
    . . f e e e e e e e e e f . . . 
    . . f e e e e e e e e e e f . . 
    . . f e e e e e e e e e e f . . 
    . f e e e e e e e e e e e f . . 
    . f e e e e e f f e e e e f . . 
    . f e e e e f b f e e e e f . . 
    . . f e 4 4 f 1 e e e e e f . . 
    . . . f 4 4 4 4 f e e e e f f . 
    . . . f 4 4 4 f f f e e e e f . 
    . . . f d d d d d d f e e f . . 
    . . . f 2 3 9 d f f f f f . . . 
    . . f d d d d d d d d f . . . . 
    . . f f d d d d d d f f . . . . 
    . . . . f f f f f f . . . . . . 
    `
let rightSwordOutImg = img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f f f . . . 
    . . . . f f f f e e e e e f . . 
    . . . f e e e e e e e e e f . . 
    . . f e e e e e e e e e e f . . 
    . . f e e e e e e e e e e e f . 
    . . f e e e e e e e e e e e f . 
    . . f e e e e f f e e e e e f . 
    . f f e e e e f b f e e e f . . 
    . f e e e e e e 1 f 4 4 e . . f 
    . f e e e e e f 4 4 4 4 f f . f 
    . . f e e e d d d d d d f 4 f 2 
    . . . f f f 2 3 8 d f f f 4 f 2 
    . . . f d d d d d d d d d f . f 
    . . . . f d d d d d d d d f . f 
    . . . . . f f f d d f f f . . . 
    `
let leftSwordOutImg = img`
    . . . . . . . . . . . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . f e e e e e f e f f . . . . 
    . . f e e e e e e e e e f . . . 
    . . f e e e e e e e e e e f . . 
    . f e e e e e e e e e e e f . . 
    . f e e e e e e e e e e e f . . 
    . f e e e e e f f e e e e f . . 
    . . f e e e f b f e e e e f f . 
    f . . e 4 4 f 1 e e e e e e f . 
    f . f f 4 4 4 4 f e e e e e f . 
    2 f 4 f d d d d d f e e e f . . 
    2 f 4 f 2 3 d f f f f f f . . . 
    f . f d d d d d d d d d f . . . 
    f . f d d d d d d d d f . . . . 
    . . . f f f d d f f f . . . . . 
    `
ashley = sprites.create(rightFacingImg, SpriteKind.Player)
controller.moveSprite(ashley, 100, 0)
ashley.ay = 350
scene.cameraFollowSprite(ashley)
tiles.setTilemap(tilemap`level`)
tiles.placeOnTile(ashley, tiles.getTileLocation(4, 30))
game.onUpdate(function () {
    if (ashley.tileKindAt(TileDirection.Right, sprites.dungeon.collectibleRedCrystal)) {
        game.over(true)
    }
})
game.onUpdateInterval(100, function () {
    if (ashley.isHittingTile(CollisionDirection.Right) && ashley.vy > 0) {
        ashley.ay = 0
        ashley.vy = 15
        ashley.setImage(rightSwordOutImg)
    } else if (ashley.isHittingTile(CollisionDirection.Left) && ashley.vy > 0) {
        ashley.ay = 0
        ashley.vy = 15
        ashley.setImage(leftSwordOutImg)
    } else {
        ashley.ay = 350
    }
})
