// const soma = function(v1,v2)(return v1+v2)
const soma=(v1,v2)=>{return v1+v2} 

// caso seja uma função mais detalhada precisa de return, parenteses e chaves
const soma2=(v1,v2)=>{
  let res=v1+v2
  return res
}

// se for somente um valor nao precisa de parenteses
const nome=n=>{return n}

// se nao precisar de return nao necessita de chaves 
const add=n=>n+10

console.log(add(10))
console.log(nome("Bruno"))
console.log(soma(10,5))