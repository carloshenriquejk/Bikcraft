       // ativar links no menu 
const links = document.querySelectorAll('.header-menu a')
function ativarLink(link) {
  // pega toda a url
  const url= location.href;
  // so o caminho
const href = link.href;

// se dentor de url tem o heref
  if(url.includes(href)){
    // adicionando uma classe no html
    link.classList.add('ativo')

  }
}
links.forEach(ativarLink);


// pegar iten do orcamneto e passar pra outra pagina
const parametos = new URLSearchParams(location.search);
                   //  checa a url quando licar n botão
function dados(parameto) {
         // pega os dados que o usuaio selecionou
  const elemento = document.getElementById(parameto);
  if(elemento) {
    elemento.checked = true;
  }
}
parametos.forEach(dados)


// area de perguntas
const perguntas =  document.querySelectorAll('.perguntas button')
  // ativar as peguntas 

function ativar (event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute('aria-controls');
  const resposta = document.getElementById(controls)
  // varia entre on e eff
  resposta.classList.toggle('ativo')
                              //procura ativo 
  const ativa = resposta.classList.contains('ativo')
  pergunta.setAttribute('aria-expanded', ativa)

}
  function eventosPerguntas(pergunta){
    pergunta.addEventListener('click',ativar)
  }

perguntas.forEach(eventosPerguntas)

// altear as imagens das bicicleta

const galeria = document.querySelectorAll('.bicicleta-imagens img')
const galeriacontainer = document.querySelector('.bicicleta-imagens')

function trocarImg(event){
  const img = event.currentTarget;
 const media = matchMedia("(min-widht: 1000px)").matches;
 if(media){
       // muda para a posição
     galeriacontainer.prepend(img)
 }
}

function mudar(img) {
  img.addEventListener("click", trocarImg);
}

galeria.forEach(mudar)

if(window.SimpleAnime){
  new SimpleAnime();
}