function light_on (number_leds: number, red: number, green: number, blue: number) {
    for (let index = 0; index < number_leds; index++) {
        pins.spiWrite(red)
pins.spiWrite(green)
pins.spiWrite(blue)
    }
    control.waitMicros(500)
}
let led_count = 0
pins.spiFrequency(1000000)
pins.spiFormat(8, 3)
basic.forever(function () {
    led_count = 5
    light_on(led_count, 5, 0, 0)
    basic.clearScreen()
    basic.pause(1000)
    light_on(led_count, 0, 0, 5)
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
})
