function Idle_Animation () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # . # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . # # #
        # # # # #
        # # # . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . # # #
        # # . # #
        # # # . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . # . #
        # # # # #
        # . # . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . # . #
        # # . # #
        # . # . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . # . #
        # . # . #
        # . # . #
        # # # # #
        `)
}
basic.forever(function () {
    Idle_Animation()
})
