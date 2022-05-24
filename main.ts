let step = 0
input.onButtonPressed(Button.A, function () {
    step = 0
    while (input.isGesture(Gesture.Shake)) {
        step += 1
    }
})
