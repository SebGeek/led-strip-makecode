def light_on(number_leds: number, red: number, green: number, blue: number):
    for index in range(number_leds):
        pins.spi_write(red)
        pins.spi_write(green)
        pins.spi_write(blue)
    control.wait_micros(500)
led_count = 0
pins.spi_frequency(1000000)
pins.spi_format(8, 3)

def on_forever():
    global led_count
    led_count = 5
    light_on(led_count, 5, 5, 0)
    basic.clear_screen()
    basic.pause(1000)
    light_on(led_count, 8, 8, 8)
    basic.show_icon(IconNames.HEART)
    basic.pause(1000)
basic.forever(on_forever)
