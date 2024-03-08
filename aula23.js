// spreed - parametros rest (...)

function soma(...valores){
  let tam = valores.length
  let res = 0
  for (let v of valores){
    res+=v
  }
  return res

  // for of percorre a lista e mostra o indice e sua soma

  // for(let i=0; i<tam; i++){
  //   res += valores[i]
  // }
  // return res  

}
console.log(soma(10,5,2,8))

/* valores.length tamanho da lista
let tam = valores.length pra saber a quantidade de numeros que tem dentro da lista e assim fazer a quantidade de repetições

res = res + valores [i]
res = 0 + 10 = 10
res = 10 + 5 = 15
res = 15 + 2 = 17
res = 17 + 8 = 25
*/