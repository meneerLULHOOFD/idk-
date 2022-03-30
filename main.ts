input.onButtonPressed(Button.B, function () {
	
})
input.onPinPressed(TouchPin.P1, function () {
    teller += 1
    basic.showIcon(IconNames.Asleep)
    music.playMelody("C5 - C5 - C5 - C5 - ", 500)
    music.playMelody("- B - B - B - B ", 500)
    music.playMelody("A - A - A - A - ", 500)
    music.playMelody("- G - G - G - G ", 500)
})
let teller = 0
music.setVolume(101)
basic.forever(function () {
    basic.showNumber(teller)
})
