import analyzer from "./analyzer.js";

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const texto1 = document.querySelector('textarea[name="user-input"]');
//const texto = texto1.value
const btnBorra = document.getElementById("reset-button");
const contarpalabras = document.querySelector('li.cuenta:nth-child(1)');
const contarcaracteres = document.querySelector('li.cuenta:nth-child(2)');
const caracteressinesp = document.querySelector('li.cuenta:nth-child(3)');
const contarnumeros = document.querySelector('li.cuenta:nth-child(4)');
const sumanumeros = document.querySelector('li.cuenta:nth-child(5)');
const longitudpalabras = document.querySelector('li.cuenta:nth-child(6)');



// CONTADOR DE PALABRAS

texto1.addEventListener("input", function () {
  const texto = texto1.value;
  //CONTADOR DE PALABRAS
  const contar = analyzer.getWordCount(texto);
  contarpalabras.textContent = "Palabras: " + contar;
  //CONTADOR DE CARACTERES
  const contarc = analyzer.getCharacterCount(texto);
  contarcaracteres.textContent = "Caracteres: " + contarc;
  //CONTADOR DE CARACTERES SIN ESPACIOS NI CARACTERES ESPECIALES
  const contarse = analyzer.getCharacterCountExcludingSpaces(texto);
  caracteressinesp.textContent = "Caracteres sin espacios: " + contarse;
  //CONTADOR DE NUMEROS
  const contarnums = analyzer.getNumberCount(texto);
  contarnumeros.textContent = "Numeros: " + contarnums;
  //CONTADOR DE SUMA DE NUMEROS
  const sumanums = analyzer.getNumberSum(texto);
  sumanumeros.textContent = "Suma de Numeros: " + sumanums;
  //CONTADOR DE LONGITUD DE PALABRAS
  const longword = analyzer.getAverageWordLength(texto);
  longitudpalabras.textContent = "Longitud de Palabras: " + longword;


})

btnBorra.addEventListener ("click", function () {
  texto1.value = ""
  contarpalabras.textContent = "Palabras:  0"
  contarcaracteres.textContent = "Caracteres:  0"
  caracteressinesp.textContent = "Caracteres sin Espacios: 0 " 
  contarnumeros.textContent = "Números:  0"
  sumanumeros.textContent = "Suma de Números:  0" 
  longitudpalabras.textContent = "Longitud de Palabras:  0"

})




