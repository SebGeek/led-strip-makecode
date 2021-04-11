function allume () {
    for (let index = 0; index < led_count; index++) {
        pins.spiWrite(color[0])
pins.spiWrite(color[1])
pins.spiWrite(color[2])
    }
    control.waitMicros(500)
}
let led_count = 0
let color : number[] = []
pins.spiFrequency(1000000)
pins.spiFormat(8, 3)
led_count = 10
basic.forever(function () {
    color = [5, 5, 5]
    allume()
    basic.clearScreen()
    basic.pause(1000)
    color = [8, 8, 8]
    allume()
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
})
