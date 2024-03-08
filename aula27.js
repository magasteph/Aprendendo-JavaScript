// função geradora
// retorna ao longo da execução quando chama a função nao sendo necessariamente o mesmo resultado
// yield mantem o estado interno, podendo ser pausada e executada posteriormente 

function* contador(){
  let i=0
  while (true){
    yield i++
    if (i>5)
      break
  }
}

const iterador = contador()
for (let c of iterador){
  console.log(c)
}

/* 
for (let i=0; i<10; i++){
  console.log(iterador.next().value)
}



function* perguntas(){
  const nome = yield ' Qual seu nome? '
  const esporte = yield 'Qual seu esporte favorito? '
  return ' Seu nome é ' + nome + ', seu esporte favorito é ' + esporte
}
 
const iterador=perguntas()

console.log(iterador.next().value)
console.log(iterador.next('Bruno').value)
console.log(iterador.next('Natação').value)



 function* cores(){
   yield 'vermelho'
   yield 'verde'
   yield 'azul'
}
let interador = cores()
console.log(interador.next().value)
console.log(interador.next().value)
console.log(interador.next().value) 
*/