const array = ["maçã", "banana", "maçã", "laranja", "pera", "banana", "uva", "maçã", "kiwi", "laranja"]
let contagemFrutas = {}
//criando laço for of para fazer contagem
for(let fruta of array){
    //para cada fruta
    //se a fruta nao existe no objeto, cria
    //se a fruta existe no objeto, soma
    if (fruta in contagemFrutas){
        contagemFrutas[fruta] += 1
    }else{
        contagemFrutas[fruta] = 1
    }
}
for(let fruta in contagemFrutas){
    console.log(`A fruta ${fruta} foi repetida ${contagemFrutas[fruta]}`)
}