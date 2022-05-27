var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var tdAltura = paciente.querySelector(".info-altura");
  var tdImc = paciente.querySelector(".info-imc");

  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;

  var pesoEhValido = validaPeso(peso);
  var alturaEhValida = validaAltura(altura);

  if (!pesoEhValido) {
    var message = "Peso inválido!";

    tdPeso.textContent = message;
  }

  if (!alturaEhValida) {
    var message = "Altura inválida!";

    tdAltura.textContent = message;
  }

  if (pesoEhValido && alturaEhValida) {
    var imc = calculaImc(peso, altura);

    tdImc.textContent = imc;
  } else {
    paciente.classList.add("paciente-invalido");
    tdImc.textContent = "-";
  }
}

function validaPeso(peso) {
  return peso >= 0 && peso <= 1000;
}

function validaAltura(altura) {
  return altura >= 0 && altura <= 3;
}

function calculaImc(peso, altura) {
  var imc = peso / (altura * altura);

  return imc.toFixed(2);
}
