controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
})
info.onCountdownEnd(function () {
    info.changeScoreBy(-2)
    info.startCountdown(0.5)
})
info.onScore(0, function () {
    game.gameOver(false)
})
info.onScore(500, function () {
    info.stopCountdown()
    game.showLongText("...", DialogLayout.Bottom)
    game.gameOver(true)
})
game.splash("SoftArcade Presents..")
game.splash("money game")
game.showLongText("You accidentally signed up for a subscription that costs 2usd every second.", DialogLayout.Full)
game.showLongText("To Cancel The Subscription, Get To 500usd.", DialogLayout.Full)
game.showLongText("your job is to get lots and lots of money.", DialogLayout.Full)
game.splash("Click B Button To Earn Money!")
info.startCountdown(5)
