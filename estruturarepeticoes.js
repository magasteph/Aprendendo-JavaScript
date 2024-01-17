// for (inicializador; condição-saida; expressao-final){
  // executar o codigo
// }
// exercicio

let notas = [2,5,10,25,50,100,10,25,50,100,10,25,50,100,10,25,50,100,10,25,50,100,10,25,50,100,10,25,50,100,10,25,50,100,10,25,50,100,10,25,50,100,10,25,50,100];
let total = 0;
for (let repeticoes = 0; repeticoes < notas.length; repeticoes++){
  total += notas[repeticoes]
}
console.log('O total do seu dinheiro é', total);