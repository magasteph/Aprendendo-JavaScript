// LOOPS For in e for of

const objs=document.getElementsByTagName("div")



for (o of objs){
  console.log(o.innerHTML="Curso")
}
//percorrendo coleções = indice 

for (o in objs){
  // console.log(objs[o].innerHTML)
  console.log(o)
}
// = tipos


let num = [10,20,30,40,50]
for(let i=0; i<num.length; i++){
  console.log(num[i])
}

// mais complicado. for in e for of é mais simplificado

// for(n of num){
//   console.log(n)
// }

//FOR OF -  intera os elementos que estao dentro da coleção que ele esta interando

// for(n in num){
//  console.log(n)
// }

// FOR IN - intera a coleção dentro do n, percorrendo e retornando a posição do array, imprimindo os mesmos.Somente colocando ele dentro do indice que retorna o que tem dentro da coleção num[i] 

// for (let i=0; i<num.length; i++){
//  console.log(num[i])
// }

// length se refere a quantidade dos elementos, então enquanto o i for menor que a qnt dos elementos do array de num

// colocando num mostra o indice do numero que começa no 0,1,2,3,4 e para aparecer os numeros coloca num[i]