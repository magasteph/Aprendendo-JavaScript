let listaCarros = [
  {
    "nome": "Argo",
    "img": "img/argo.jpg",
    "descricao": "Fiat Argo - Automax Fiat"
  },
  {
    "nome": "Fiesta",
    "img": "img/fiesta.jpg",
    "descricao": "Ford Fiesta - Motor hibrido e cambio"
  },
  {
    "nome": "Ford Ka",
    "img": "img/fordka.jpeg",
    "descricao": "Ford Ka Titanium - potente e completo"
  },
  {
    "nome": "Nivus",
    "img": "img/nivus.jpg",
    "descricao": "Volkswagen Nivus SUV"
  },
  {
    "nome": "Spin",
    "img": "img/spin.jpg",
    "descricao":"Chevrolet Spin LT" 
  },
  {
    "nome": "T-cross",
    "img": "img/tcross.jpg",
    "descricao": "Volkswagen T-cross 2021"
  }
]

listaCarros.map((carro, posicao)=> {
  let cardCarro = document.getElementById("cards");
cardCarro.innerHTML += `
  <div class="col-md-4"> 
    <div class="card" class = "md-2"> 
      <img src = "${carro.img}" class="card-img-top" alt="..."> 
        <div class="card-body"> 
        <h5 class="card-title"> ${carro.nome} </h5> 
        <a href="#" class="btn btn-secondary" onclick ="zoomImg('${posicao}')"> <i class="bi bi-zoom-in"></i></a> 
        </div> 
      </div> 
    </div>
  `

})

function zoomImg(posicao){
  let carroSelecionado = listaCarros[posicao];
  document.getElementById("nomeCarro").innerHTML = carroSelecionado.nome;
  document.getElementById("descricaoCarro").innerHTML = carroSelecionado.descricao;
  document.getElementById("imgModal").src = carroSelecionado.img;

  new bootstrap.Modal('#zoomImg').show();
}

function alterarTemaSite(){
  let tema = document.querySelector("html").getAttribute("data-bs-theme");
  if(tema === "dark" ){
    document.querySelector("html").setAttribute("data-bs-theme", "light");
    document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-moon-fill"></i>`;
  }else{
    document.querySelector("html").setAttribute("data-bs-theme", "dark");
    document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-brightness-high-fill"> </i>`;
  }
}