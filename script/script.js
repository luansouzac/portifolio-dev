
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

let front = document.getElementById("front");
let back = document.getElementById("back");

let containerFront = document.getElementById("container-front");
let containerBack = document.getElementById("container-back");

front.addEventListener("mouseover", function () {
  containerFront.style.opacity = "1";
  containerFront.style.visibility = "visible";
  containerFront.style.transform = "translateY(0)";
});

front.addEventListener("mouseout", function () {
  containerFront.style.opacity = "0";
  containerFront.style.transform = "translateY(10px)";

  setTimeout(() => {
    containerFront.style.visibility = "hidden";
  }, 300);
});

back.addEventListener("mouseover", function () {
  containerBack.style.opacity = "1";
  containerBack.style.visibility = "visible";
  containerBack.style.transform = "translateY(0)";
});

back.addEventListener("mouseout", function () {
  containerBack.style.opacity = "0";
  containerBack.style.transform = "translateY(10px)";

  setTimeout(() => {
    containerBack.style.visibility = "hidden";
  }, 300);
});



