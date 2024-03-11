// map - percorrer arrays

const converterInt = (e) => parseInt(e)
const dobrar = (e) => e*2


let num = ['1','2','3','4','5'].map(dobrar)//ou (converterInt)
console.log(num)




const el=document.getElementsByTagName("div")
const valores = Array.prototype.map.call(el,({innerHTML})=>innerHTML)
// retorna cada innerHtml que tem na coleção de array
console.log(valores)






// pegando os elementos que estão em div
let el = document.getElementsByTagName("div")

// colocando essa varivel dentro de array para que possa percorrer 
el=[...el]
console.log(el)

// utilizando map para percorrer, "e" para conteudo "i" para indice
el.map((e,i)=>{
    e.innerHTML = "cfb cursos" // substitue todos os elementos por cfb cursos
    // console.log(e.innerHTML) - mostra o que tem dentro de cada div
})





const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP','React']
cursos.map((el,i)=>{
    console.log("Curso: " + el + " - Posição do curso : " + i)
})

let c = cursos.map((el,i)=>{
    return el
})
console.log(c)


