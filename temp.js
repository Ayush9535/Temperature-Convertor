const optionlist = document.querySelector("#choices")
const resultText = document.querySelector("#result-text")
const userValue = document.querySelector(".uservalue")
const button = document.querySelector("button")
function celciusTokelvin(x){
    return x + 273.15
}

function celciusTofahrenhiet(x){
    return ((x * 9)/5) + 32
}

function kelvinTocelcius(x){
    return x - 273.15
}

function kelvinTofahrenhiet(x){
    return (((x-273.15) * 9)/5) + 32
}

function fahrenhietTocelcius(x){
    return ((x-32)*5)/9
}

function fahrenhietTokelvin(x){
    return (((x-32)*5)/9) + 273.15
}

button.onclick = () => {
    if (optionlist.value === "c2k"){
        ans = celciusTokelvin(Number(userValue.value))
        resultText.innerHTML = "Answer = " + ans + " K"
    }
    else if (optionlist.value === "c2f"){
        ans = celciusTofahrenhiet(Number(userValue.value))
        resultText.innerHTML = "Answer = " + ans + " F"

    }
    else if (optionlist.value === "k2c"){
        ans = kelvinTocelcius(Number(userValue.value))
        resultText.innerHTML = "Answer = " + ans + " C"

    }
    else if (optionlist.value === "k2f"){
        ans = kelvinTofahrenhiet(Number(userValue.value))
        resultText.innerHTML = "Answer = " + ans + " F"

    }
    else if (optionlist.value === "f2c"){
        ans = fahrenhietTocelcius(Number(userValue.value))
        resultText.innerHTML = "Answer = " + ans + " C"

    }
    else if (optionlist.value === "f2k"){
        ans = fahrenhietTokelvin(Number(userValue.value))
        resultText.innerHTML = "Answer = " + ans + " K"

    }
    else{
        resultText.innerHTML = "Please Enter Valid Value"
    }
}