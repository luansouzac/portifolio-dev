
window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;

    const line = document.getElementById("scroll-line");
    line.style.height = `${scrollPercent * 100}vh`;
});

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
