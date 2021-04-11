def allume():
    for index in range(led_count):
        pins.spi_write(color[0])
        pins.spi_write(color[1])
        pins.spi_write(color[2])
    control.wait_micros(500)
led_count = 0
color: List[number] = []
pins.spi_frequency(1000000)
pins.spi_format(8, 3)
led_count = 10

def on_forever():
    global color
    color = [5, 5, 5]
    allume()
    basic.clear_screen()
    basic.pause(1000)
    color = [8, 8, 8]
    allume()
    basic.show_icon(IconNames.HEART)
    basic.pause(1000)
basic.forever(on_forever)
