// utilização de this pode ser usado na escolha de não usar outra variavel para agregar valor 
// para distinguir as variaveis

function aluno(nome,nota) {
    this.nome = nome 
    this.nota = nota

    this.dados_anonimos=function(){
        setTimeout(function(){
            console.log(this.nome)
            console.log(this.nota)
        },2000)
    }
    this.dados_arrow=function(){
        setTimeout(()=>{
            console.log(this.nome)
            console.log(this.nota)
        },2000)        
    }
    //setTimeout gera atraso na função, deixa o tempo vencer

    // arrow function nao usa o contexto da execução atual, ele utiliza o contesto do pai, no caso aluno 
    
    // console.log(nome)
    // console.log(nota)
}

const al1=new aluno("Bruno",100)
al1.dados_anonimos()
al1.dados_arrow()