var elementosDuvida = document.querySelectorAll(".duvida");

//forEach = para cada
elementosDuvida.forEach(function (duvida) {
  //Adicionar um ouvidor de eventos
  duvida.addEventListener("click", function () {
    duvida.classList.toggle("ativa")
  });
});