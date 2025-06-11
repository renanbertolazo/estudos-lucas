function maosDoGame(primeiraMao: string, segundaMao: string) {

    if (primeiraMao === segundaMao) {
        return 'Vocês empataram!'
    } else if (primeiraMao == 'pedra' && segundaMao == 'papel') {
        return 'A segunda mão venceu!'
    } else if (primeiraMao == 'pedra' && segundaMao == 'tesoura') {
        return 'A primeira mão venceu!'
    } else if (primeiraMao == 'papel' && segundaMao == 'pedra') {
        return 'A primeira mão venceu'
    } else if (primeiraMao == 'papel' && segundaMao == 'tesoura') {
        return 'A segunda mão venceu'
    } else if (primeiraMao == 'tesoura' && segundaMao == 'pedra') {
        return 'A segunda mão venceu'
    } else if (primeiraMao == 'tesoura' && segundaMao == 'papel') {
        return 'A primeira mão venceu'
    }
}

console.log(maosDoGame('pedra', 'pedra'))
console.log(maosDoGame('papel', 'papel'))
console.log(maosDoGame('tesoura', 'tesoura'))
console.log(maosDoGame('pedra', 'papel'))
console.log(maosDoGame('pedra', 'tesoura'))
console.log(maosDoGame('papel', 'pedra'))
console.log(maosDoGame('papel', 'tesoura'))
console.log(maosDoGame('tesoura', 'pedra'))
console.log(maosDoGame('tesoura', 'papel'))
