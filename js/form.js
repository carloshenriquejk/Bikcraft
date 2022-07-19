const formulario = document.querySelector("form")

function formularioEnviado(resposta){
  if(resposta.ok){
    formulario.innerHTML = 
    "<P class='font-2-l'>aprovado</P>"
  } else  {
   formulario.innerHTML = 
"<P class='font-2-l'>Erro</P>"
}
}
function enviarFormulario(event) {
  event.preventDefault();
    // o botão vai ser desabilitado ao clique
  const botao = document.querySelector("form button")
  botao.disabled = true;
  botao.innerText = "Enviando..."

  const data = new FormData(formulario);

  fetch("./enviar.php",{
    method: "POST",
    body: data,
  }).then(formularioEnviado)
}

formulario.addEventListener("submit", enviarFormulario)