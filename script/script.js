function mostrarSecao(secaoAlvoClasse) {
  const secoes = document.querySelectorAll('main section');

  secoes.forEach(secao => {
    if (secao.classList.contains(secaoAlvoClasse)) {
      secao.style.display = 'flex'; 
    } else {
      secao.style.display = 'none';
    }
  });
}

function home() {
  mostrarSecao('home');
}

function projetos() {
  mostrarSecao('projetos');
}

function contato() {
  mostrarSecao('contato');
}

function tecnologias() {
  mostrarSecao('tecnologias');
}




