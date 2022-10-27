const inputCpf = document.querySelector("#inputCpf");
const erroInput = document.querySelector(".erro-input");
const sppiner = document.querySelector(".sppiner-loading");

const form = document.querySelector(".form-onboarding");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

const unmaskedCpf = (maskedCpf) => {
  return maskedCpf.replace(/\D/g, "");
};


const redirecionarAvanade = () => {
  sppiner.style.display = "block";

  setTimeout(() => {
    window.location.href = "https://www.avanade.com.br/pt-br";
  }, 2000);
};

const handleCpfInput = (event) => {
  const unmaskCpf = unmaskedCpf(event.target.value);
  
  if (validaCPF(unmaskCpf)) {
    erroInput.style.display = "none";
    inputCpf.style.borderBottom = "1px solid black";
    redirecionarAvanade();
  }
  else {
    erroInput.style.display = "block";
    inputCpf.style.borderBottom = "1px solid red";
  }

};

inputCpf.addEventListener("input", handleCpfInput);

function validaCPF(cpf) {
  var soma;
  var resto;
  soma = 0;
  if (cpf == "00000000000") return false;

  for (i = 1; i <= 9; i++)
    soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  resto = (soma * 10) % 11;

  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(cpf.substring(9, 10))) return false;

  soma = 0;
  for (i = 1; i <= 10; i++)
    soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  resto = (soma * 10) % 11;

  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(cpf.substring(10, 11))) return false;
  return true;
}
