const time = ["Julius", "Chis"]
// indices     0        1
time[5] // undefined
time[6] = 'Victor' // atribuição dinâmicos

for (const jogador of time) {
    if (jogador != undefined)
    console.log(jogador)

}
console.log(time)
console.log(time[1])