const objs1=document.getElementsByTagName("div")
const objs2=[...document.getElementsByTagName("div")]

objs2.forEach(element => {
  element.innerHTML="Curso"
});

//innerHTML inclui texto dentro do HTML

// for each serve para descorrer sobre o elemrento e apresentar tudo o que tem dentro, funciona apenas para o objs2 pois ele esta em array 

console.log(objs1)
console.log(objs2)

//document traz os itens do html para o js
// com o spread do array ele traz bastantes elementos fora do html


/* concatenação spread
const jogador1={nome: "Bruno", energia: 100, vidas: 3, magia: 150}
const jogador2={nome: "Bruce", energia: 100, vidas: 5, velocidade: 80}
const jogador3={...jogador1, ...jogador2}
console.log(jogador3) 
mistura as ultimas propriedades comuns e depois as diferentes
const soma=(v1,v2,v3)=>{
  return v1+v2+v3
}

let valores = [1,5,4,10]

console.log(soma (...valores))

operador spred "..." espalhando os valores para cada propriedade
*/