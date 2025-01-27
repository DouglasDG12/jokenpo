const result = document.querySelector(".result")
const meusPontos = document.querySelector(".my-result")
const pontosDaMaquina = document.querySelector(".result-maquina")

let myResult = 0
let resultMaquina = 0 

function player(humano) {

    resultado(humano, maquina())
}

function maquina() {
    const choices = ['pedra', 'papel', 'tesoura']
    const escolhas = Math.floor(Math.random() * 3)

    return choices[escolhas]
}

function resultado(human, maquina) {
    console.log('jogador: ' + human + 'maquina: ' + maquina)

    if (human === maquina) {
        result.innerHTML = 'EMPATE!!!'
    } 
    else if (human === 'pedra' && maquina === 'tesoura' ||
        human === 'papel' && maquina === 'pedra' ||
        human === 'tesoura' && maquina === 'papel'
    ) {
        result.innerHTML = 'VOCÊ GANHOU!!!'

        myResult++
       meusPontos.innerHTML = myResult

    }else{
        result.innerHTML = 'VOCÊ PERDEU!!!'

        resultMaquina++
        pontosDaMaquina.innerHTML = resultMaquina
    }


}