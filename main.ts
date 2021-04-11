function France () {
    control_one_led(0, 0, 200)
    control_one_led(0, 0, 200)
    control_one_led(66, 66, 66)
    control_one_led(66, 66, 66)
    control_one_led(200, 0, 0)
    control_one_led(200, 0, 0)
    // Restart from first led index (flush)
    control.waitMicros(500)
}
function control_one_led (red: number, green: number, blue: number) {
    return_val = pins.spiWrite(red)
    return_val = pins.spiWrite(green)
    return_val = pins.spiWrite(blue)
}
function Italy () {
    control_one_led(0, 200, 0)
    control_one_led(0, 200, 0)
    control_one_led(66, 66, 66)
    control_one_led(66, 66, 66)
    control_one_led(200, 0, 0)
    control_one_led(200, 0, 0)
    // Restart from first led index (flush)
    control.waitMicros(500)
}
function control_leds (number_leds: number, red: number, green: number, blue: number) {
    for (let index = 0; index < number_leds; index++) {
        control_one_led(red, green, blue)
    }
    // Restart from first led index (flush)
    control.waitMicros(500)
}
let led_count = 0
let return_val = 0
pins.spiFrequency(1000000)
pins.spiFormat(8, 3)
let total_number_leds = 96
control_leds(total_number_leds, 0, 0, 0)
// WS2801 LED strip  : definition : microbit
// white             : GND        : GND
// blue              : MOSI       : P15
// green             : SCK        : P13
// red               : VCC        : Not Connected
basic.forever(function () {
    led_count = 6
    basic.clearScreen()
    France()
    basic.pause(1000)
    basic.showIcon(IconNames.Ghost)
    Italy()
    basic.pause(1000)
})
