const result = document.querySelector(".result")
const meusPontos = document.querySelector(".my-result")
const pontosDaMaquina = document.querySelector(".result-maquina")

let myResult = 0
let resultMaquina = 0 

const GAME_OPTIONS = {
    PEDRA: 'pedra',
    PAPEL: 'papel',
    TESOURA: 'tesoura'
}

function player(humano) {

    resultado(humano, maquina())
}

function maquina() {
    const choices = [GAME_OPTIONS.PEDRA, GAME_OPTIONS.PAPEL, GAME_OPTIONS.TESOURA]
    const escolhas = Math.floor(Math.random() * 3)

    return choices[escolhas]
}

function resultado(human, maquina) {
    console.log('jogador: ' + human + 'maquina: ' + maquina)

    if (human === maquina) {
        result.innerHTML = 'EMPATE!!!'
    } 
    else if (human === GAME_OPTIONS.PEDRA && maquina === GAME_OPTIONS.TESOURA ||
        human === GAME_OPTIONS.PAPEL && maquina === GAME_OPTIONS.PEDRA ||
        human === GAME_OPTIONS.TESOURA && maquina === GAME_OPTIONS.PAPEL
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