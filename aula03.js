"use strict"
/* quando declara variavel dentro de funcao, o que estiver fora, nao funciona / let impede de ser usada fora do escopo/ agora var, aceita em alguns casos

function teste(){
  if (true){
    let nome="Bruno"
    console.log("dentro do if teste: " + nome)
  }
  console.log("dentro de teste: " + nome)
}
teste()
console.log("fora de teste:" + nome ) */

let nome="Bruno"
nome="CFB Cursos"
nome=10

const curso="Javascript"
// const curso="Html" //impossivel 

console.log(curso)