function mostrarSecao(secaoAlvoClasse) {
  const secoes = document.querySelectorAll("main section");

  secoes.forEach((secao) => {
    if (secao.classList.contains(secaoAlvoClasse)) {
      secao.style.display = "flex";
    } else {
      secao.style.display = "none";
    }
  });
}

function home() {
  mostrarSecao("home");
}

function projetos() {
  mostrarSecao("projetos");
}

function contato() {
  mostrarSecao("contato");
}

function tecnologias() {
  mostrarSecao("tecnologias");
}

const form = document.getElementById("contact-form");
const nomeInput = document.getElementById("nome");
const emailInput = document.getElementById("email");
const telefoneInput = document.getElementById("telefone");

const telefoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;

const showError = (input, message) => {
  const formGroup = input.parentElement;
  const errorElement = formGroup.querySelector(".error-message");
  errorElement.textContent = message;
  input.classList.add("is-invalid");
  input.classList.remove("is-valid");
};

const showSuccess = (input) => {
  const formGroup = input.parentElement;
  const errorElement = formGroup.querySelector(".error-message");
  errorElement.textContent = "";
  input.classList.remove("is-invalid");
  input.classList.add("is-valid");
};

const validateNome = () => {
  if (nomeInput.value.trim().length < 3) {
    showError(nomeInput, "O nome deve ter no mínimo 3 caracteres.");
    return false;
  }
  showSuccess(nomeInput);
  return true;
};

const validateEmail = () => {
  if (!emailInput.checkValidity() || emailInput.value.trim() === "") {
    showError(emailInput, "Por favor, insira um e-mail válido.");
    return false;
  }
  showSuccess(emailInput);
  return true;
};

const validateTelefone = () => {
  if (
    telefoneInput.value.trim() !== "" &&
    !telefoneRegex.test(telefoneInput.value)
  ) {
    showError(telefoneInput, "Formato inválido. Use (XX) XXXXX-XXXX.");
    return false;
  }
  const formGroup = telefoneInput.parentElement;
  const errorElement = formGroup.querySelector(".error-message");
  errorElement.textContent = "";
  telefoneInput.classList.remove("is-invalid");
  return true;
};

nomeInput.addEventListener("input", validateNome);
emailInput.addEventListener("input", validateEmail);

telefoneInput.addEventListener("input", () => {
  let value = telefoneInput.value.replace(/\D/g, "").substring(0, 11);
  let formattedValue = "";

  if (value.length > 0) {
    formattedValue = "(" + value.substring(0, 2);
  }
  if (value.length > 2) {
    formattedValue += ") " + value.substring(2, 7);
  }
  if (value.length > 7) {
    formattedValue += "-" + value.substring(7, 11);
  }
  telefoneInput.value = formattedValue;

  validateTelefone();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const isNomeValid = validateNome();
  const isEmailValid = validateEmail();
  const isTelefoneValid = validateTelefone();

  if (isNomeValid && isEmailValid && isTelefoneValid) {
    alert("Formulário enviado com sucesso!");
    form.reset();
    document.querySelectorAll(".is-valid, .is-invalid").forEach((el) => {
      el.classList.remove("is-valid", "is-invalid");
    });
  }
});
