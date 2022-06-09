input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    radio.sendString("Left")
})
input.onSound(DetectedSound.Loud, function () {
    Forward_Backward_Status = 0
    radio.sendString("Stop")
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
    basic.showIcon(IconNames.No)
    radio.sendString("Stop")
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    radio.sendString("Backward")
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    radio.sendString("Right")
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    radio.sendString("Forward")
})
let Forward_Backward_Status = 0
basic.showIcon(IconNames.Target)
radio.setGroup(1)
radio.sendString("Stop")
Forward_Backward_Status = 0
