def light_on(number_leds: number, red: number, green: number, blue: number):
    global return_val
    for index in range(number_leds):
        return_val = pins.spi_write(red)
        return_val = pins.spi_write(green)
        return_val = pins.spi_write(blue)
    # WS2801 needs 500 micro seconds between flushes
    control.wait_micros(500)
led_count = 0
return_val = 0
pins.spi_frequency(1000000)
pins.spi_format(8, 3)
total_number_leds = 96
light_on(total_number_leds, 0, 0, 0)
# WS2801 LED strip  : definition : microbit
# white             : GND        : GND
# blue              : MOSI       : P15
# green             : SCK        : P13
# red               : VCC        : Not Connected

def on_forever():
    global led_count
    led_count = 4
    light_on(led_count, 0, 5, 0)
    basic.clear_screen()
    basic.pause(1000)
    light_on(led_count, 0, 0, 5)
    basic.show_icon(IconNames.HEART)
    basic.pause(1000)
basic.forever(on_forever)
