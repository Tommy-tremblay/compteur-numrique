let nombre_personne = 0
input.onButtonPressed(Button.A, function () {
    nombre_personne += 0 - 1
    basic.showNumber(nombre_personne)
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    nombre_personne += 0 + 1
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
basic.forever(function () {
	
})
