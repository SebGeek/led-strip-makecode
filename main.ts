function light_on (number_leds: number, red: number, green: number, blue: number) {
    for (let index = 0; index < number_leds; index++) {
        return_val = pins.spiWrite(red)
        return_val = pins.spiWrite(green)
        return_val = pins.spiWrite(blue)
    }
    // WS2801 needs 500 micro seconds between flushes
    control.waitMicros(500)
}
let led_count = 0
let return_val = 0
pins.spiFrequency(1000000)
pins.spiFormat(8, 3)
let total_number_leds = 96
light_on(total_number_leds, 0, 0, 0)
// WS2801 LED strip  : definition : microbit
// white             : GND        : GND
// blue              : MOSI       : P15
// green             : SCK        : P13
// red               : VCC        : Not Connected
basic.forever(function () {
    led_count = 4
    light_on(led_count, 0, 5, 0)
    basic.clearScreen()
    basic.pause(1000)
    light_on(led_count, 0, 0, 5)
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
})
