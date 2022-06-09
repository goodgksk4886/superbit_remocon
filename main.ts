input.onButtonPressed(Button.A, function () {
    Forward_Backward_Status = 0
    radio.sendString("Left")
})
input.onButtonPressed(Button.AB, function () {
    if (Forward_Backward_Status == 0) {
        radio.sendString("Foward")
        basic.showArrow(ArrowNames.North)
        Forward_Backward_Status = 1
    } else if (Forward_Backward_Status == 1) {
        radio.sendString("Stop")
        basic.showIcon(IconNames.Square)
        Forward_Backward_Status = 0
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    Forward_Backward_Status = 0
    radio.sendString("Right")
})
let y값 = 0
let Forward_Backward_Status = 0
radio.setGroup(1)
radio.sendString("Stop")
Forward_Backward_Status = 0
basic.forever(function () {
    if (input.acceleration(Dimension.Y) <= 500) {
        radio.sendString("Stop")
    } else {
        radio.sendString("Backward")
    }
    y값 = 0
})
