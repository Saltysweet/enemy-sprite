input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
})
let player: game.LedSprite = null
game.setScore(0)
game.setLife(3)
player = game.createSprite(0, 0)
let enemy = game.createSprite(4, 0)
basic.forever(function () {
    if (player.isTouching(enemy)) {
        basic.showIcon(IconNames.Heart)
        basic.clearScreen()
        game.removeLife(1)
    }
})
