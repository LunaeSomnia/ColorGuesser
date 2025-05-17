function generateRandomColor() {
    const r = Math.random() * 255
    const g = Math.random() * 255
    const b = Math.random() * 255
    return [r, g, b]
}

function colorFromValues(r, g, b) {
    r = r / 100 * 255
    g = g / 100 * 255
    b = b / 100 * 255
    return [r, g, b]
}

function colorString(color) {
    return `rgb(${color[0]}, ${color[1]}, ${color[2]})`
}

const MINIMUM_VICTORY_PERCENTAGE = 90;
const MAX_DISTANCE = 441.6729559300637;
function distance(color1, color2) {
    const dr = color1[0] - color2[0]
    const dg = color1[1] - color2[1]
    const db = color1[2] - color2[2]
    return Math.sqrt(dr * dr + dg * dg + db * db)
}

window.onload = () => {
    // Setup
    const dialog = document.querySelector('dialog');
    const colorToMatch = generateRandomColor();
    const colorStr = colorString(colorToMatch)
    document.querySelector("#color-to-match").style.background = colorStr
    document.querySelector("#color-match").style.background = colorStr

    // Updates
    const redSlider = document.querySelector("#red")
    redSlider.onchange = () => {
        document.querySelector("#red-value").innerHTML = redSlider.value + "%"
    }

    const greenSlider = document.querySelector("#green")
    greenSlider.onchange = () => {
        document.querySelector("#green-value").innerHTML = greenSlider.value + "%"
    }

    const blueSlider = document.querySelector("#blue")
    blueSlider.onchange = () => {
        document.querySelector("#blue-value").innerHTML = blueSlider.value + "%"
    }

    // Guess!
    const guessButton = document.getElementById('guess');
    guessButton.onclick = () => {
        const guessColor = colorFromValues(redSlider.value, greenSlider.value, blueSlider.value)
        const guessColorStr = colorString(guessColor)
        document.getElementById("color-guessed").style.background = guessColorStr

        const gameResult = document.querySelector("#game-result")
        const gameSubtitle = document.querySelector("#game-subtitle")
        const accuracy = document.querySelector("#accuracy")

        const colorDistance = distance(guessColor, colorToMatch);
        const accuracyPercentage = 100 - (colorDistance / MAX_DISTANCE) * 100
        const accuracyPercentageStr = accuracyPercentage.toString().substring(0, 2).replace(".", "")

        if (accuracyPercentage > MINIMUM_VICTORY_PERCENTAGE) {
            gameResult.innerHTML = "You Win"
            gameSubtitle.innerHTML = "Congrats!"
            gameResult.style.color = "var(--green)"
            accuracy.style.color = "var(--green)"
        } else {
            gameResult.innerHTML = "You Lose"
            gameSubtitle.innerHTML = "Damn you lost!"
            gameResult.style.color = "var(--red)"
            accuracy.style.color = "var(--red)"
        }

        accuracy.innerHTML = `${accuracyPercentageStr}% accuracy`

        dialog.showModal()
    }

    const playAgainButton = document.getElementById('play-again');
    playAgainButton.onclick = () => {
        window.location.reload()
    }

}