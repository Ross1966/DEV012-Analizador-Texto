const analyzer = {
  getWordCount: function (text) {
    if (text === "") {
      return 0;
    } else {
      text = text.replace(/\r?\n/g, " ");
      text = text.replace(/[ ]+/g, " ");
      text = text.replace(/^ /, "");
      text = text.replace(/ $/, "");
      const textoTroceado = text.split(" ");
      const numeroPalabras = textoTroceado.length;
      return numeroPalabras;
    }

    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCount: function (text) {
    if (text === "") {
      return 0;
    } else {
      const cc = text;
      const quitaesp = cc.trim();
      const resultado1 = quitaesp.length;
      return resultado1;
    }
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {
    if (text === "") {
      return 0;
    } else {
      const ccse = text.trim();
      const reemplazo = ccse.replaceAll(/\s/g, "");
      const resultado2 = reemplazo.replaceAll(/[^a-zA-Z0-9 ]/g, "");
      return resultado2.length;
    }
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {
    let cuentaPalabra = 0;

    cuentaPalabra = text.trim().split(/\s+/);
    const opera = cuentaPalabra.reduce((total, word) => total + word.length, 0);
    const long = opera / cuentaPalabra.length;
    return parseFloat(long.toFixed(2));
  },

    

  //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.

  getNumberCount: (text) => {
    const numer = text.match(/\b\d+(\.\d+)?\b/g);
    if (numer === null) {
      return 0;
    } else {
      return numer.length;
    }
  },

  //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.

  getNumberSum: (text) => {
    const sumar = text.match(/\b\d+(\.\d+)?\b/g);
    let sumanums = 0;
    if (sumar === null) {
      return 0;
    } else {
      for (let i = 0; i < sumar.length; i++) {
        const caracter = sumar[i];
        if (!isNaN(parseFloat(caracter))) {
          sumanums += parseFloat(caracter, 10);
        }
      }
    }
    return sumanums;
  },
};

//TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.

export default analyzer;
