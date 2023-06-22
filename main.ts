input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    PunkteSpielerA += 1
    if (PunkteSpielerA > PunkteSpielerB) {
        basic.showString("A")
    } else if (PunkteSpielerA < PunkteSpielerB) {
        basic.showString("B")
    } else if (PunkteSpielerA == PunkteSpielerB) {
        basic.showString("AB")
    }
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    PunkteSpielerA += 1
    PunkteSpielerB += 1
    zeigeSpielstand()
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    PunkteSpielerB += 1
    zeigeSpielstand()
})
function zeigeSpielstand () {
    if (PunkteSpielerA > PunkteSpielerB) {
        basic.showString("A")
    } else if (PunkteSpielerA < PunkteSpielerB) {
        basic.showString("B")
    } else if (PunkteSpielerA == PunkteSpielerB) {
        basic.showString("AB")
    }
}
input.onGesture(Gesture.Shake, function () {
    Zufallszahl = randint(1, 3)
    if (Zufallszahl == 1) {
        // Stein
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (Zufallszahl == 2) {
        // Schere
        basic.showLeds(`
            # . . . #
            # # . # .
            . . # . .
            # # . # .
            # . . . #
            `)
    } else if (Zufallszahl == 3) {
        // Papier
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    }
})
let PunkteSpielerB = 0
let PunkteSpielerA = 0
let Zufallszahl = 0
Zufallszahl = 0
