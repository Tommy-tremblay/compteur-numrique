let nombre_personne = 0
input.onButtonPressed(Button.A, function () {
    if (nombre_personne > 0) {
        nombre_personne += -1
        basic.showNumber(nombre_personne)
    }
})
input.onButtonPressed(Button.AB, function () {
    nombre_personne = 0
    basic.showNumber(nombre_personne)
})
input.onButtonPressed(Button.B, function () {
    nombre_personne += 1
    basic.showNumber(nombre_personne)
    if (nombre_personne >= 10) {
        basic.showLeds(`
            # . # . #
            # . # . #
            # . # . #
            . . . . .
            # . # . #
            `)
    }
})
