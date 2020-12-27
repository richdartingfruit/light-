led.enable(false)
let Strip = neopixel.create(DigitalPin.P2, 26, NeoPixelMode.RGB)
Strip.clear()
for (let index = 0; index < 4; index++) {
    Strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(500)
    Strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(500)
    Strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(500)
    Strip.showColor(neopixel.colors(NeoPixelColors.White))
}
