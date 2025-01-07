let nickanameDoPlayer = "JujubãoApelona"
let experienciaDoPlayer = 8670
let nivel = ""

    if (experienciaDoPlayer <= 1000) {
        nivel = "Ferro"
    } else if (experienciaDoPlayer >= 1001 && experienciaDoPlayer <= 2000) {
        nivel = "Bronze"
    } else if (experienciaDoPlayer >= 2001 && experienciaDoPlayer <= 5000) { 
        nivel = "Prata"
    } else if (experienciaDoPlayer >= 5001 && experienciaDoPlayer <= 7000) {
        nivel = "Ouro"
    } else if (experienciaDoPlayer >= 7001 && experienciaDoPlayer <= 8000) {
        nivel = "Platina"
    } else if (experienciaDoPlayer >= 8001 && experienciaDoPlayer <= 9000) {
        nivel = "Ascendente"
    } else if (experienciaDoPlayer >= 9001 && experienciaDoPlayer <= 10000) {
        nivel = "Imortal"
    } else if (experienciaDoPlayer >= 10001) {
        nivel = "Radiante"
    } else { console.log(nickanameDoPlayer + ", você ainda não possui nível para habilitar seu rank") }

    switch (nivel) {
        case "Ferro":
            console.log ("Parabéns " + nickanameDoPlayer + "! " + "Seu rank é: " + nivel)
        break
        
        case "Bronze":
            console.log ("Parabéns " + nickanameDoPlayer + "! " + "Seu rank é: " + nivel)
        break

        case "Prata":
            console.log ("Parabéns " + nickanameDoPlayer + "! " + "Seu rank é: " + nivel)
        break

        case "Ouro":
            console.log ("Parabéns " + nickanameDoPlayer + "! " + "Seu rank é: " + nivel)
        break

        case "Platina":
            console.log ("Parabéns " + nickanameDoPlayer + "! " + "Seu rank é: " + nivel)
        break

        case "Ascendente":
            console.log ("Parabéns " + nickanameDoPlayer + "! " + "Seu rank é: " + nivel)
        break

        case "Imortal":
            console.log("Parabéns " + nickanameDoPlayer + "! " + "Seu rank é: " + nivel)
        break

        case "Radiante":
            console.log("Parabéns " + nickanameDoPlayer + "! " + "Seu rank é: " + nivel)
        break

        default:
            console.log ("Rank não desbloqueado!")
        break
    }
