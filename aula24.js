// função construtor anonima - mais objetiva


// quando usa function no construtor com o operador new, o F tem que ser maiusculo e tudo com ""

let f = new Function ("v1", "v2", "v3" , "return v1 + v2 + v3")

console.log(f(10,5,20)) 

// funções anonimas - quando declara nao fica na memoria e so vai ser criada na execução ao contrario das outras que são criadas e esperam ser chamadas

// não precisam de nomes portanto ela é associada a uma variavel

// iniciando o contador (res) como 0 para ir contando a quantidade de valores dentro da lista, com o "of" que ja faz esse trabalho para a gente, dessa forma so precisamos ir adicionando os valores a variavel res e ir somando res = res + v

let l = function (...valores){
 let res = 0
  for (v of valores){
    res += v
    
  }
return res 
}