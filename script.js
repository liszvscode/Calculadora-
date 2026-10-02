// Pega os elementos do HTML pelo id
const campo1 = document.getElementById("n1");
const campo2 = document.getElementById("n2");
const botaoCalcular = document.getElementById("calcular");
const botaoComparar = document.getElementById("comparar");
const resultado = document.getElementById("resultado");

// Quando clicar em Calcular, soma os dois números
botaoCalcular.addEventListener("click", function () {
  const n1 = Number(campo1.value);   // pega o que foi digitado e vira número
  const n2 = Number(campo2.value);
  resultado.innerText = n1 + n2;     // mostra a soma no parágrafo
});

// Quando clicar em Comparar, diz qual é maior
botaoComparar.addEventListener("click", function () {
  const n1 = Number(campo1.value);
  const n2 = Number(campo2.value);

  if (n1 > n2) {
    resultado.innerText = n1 + " é maior que " + n2;
  } else if (n2 > n1) {
    resultado.innerText = n2 + " é maior que " + n1;
  } else {
    resultado.innerText = "Os números são iguais";
  }
});
