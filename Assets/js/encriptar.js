/*codificar*/
const cifrado = {
    encode(obtener, msj){
      if (msj == ""){ throw new TypeError;}
      let letter;
      let msjEncode = "";
      for(let i = 0; i < msj.length; i++){
        letter = msj.charCodeAt(i);
        msjEncode += String.fromCharCode(getLetter(letter,obtener));
      }
      return msjEncode;
    },
/*decodificar*/
    decode(obtener,msj){
      if (msj == ""){ throw new TypeError;}
      obtener *= -1;
      let letter;
      let msjDecode = "";
      for(let i = 0; i < msj.length; i++){
        letter = msj.charCodeAt(i);
        msjDecode += String.fromCharCode(getLetter(letter,obtener));
      }
      return msjDecode;
    }
  };
  function getLetter(letter, obtener){
let idLetter = letterValidate(letter);
let quantityLetter = 26;
/*cifrar o descifrar caracteres especiales*/
    if(idLetter === 0){ return letter;}
/* " " numeros*/
    if(idLetter === 48){ quantityLetter = 10;}
/* " " mayus y mins, numrs*/ 
let position = (letter - idLetter + obtener) % quantityLetter;
    if(position < 0){ position = quantityLetter + position;}
    return (position + idLetter);
  }
/*Validar mayus, mins, numrs y carc.espec*/
  function letterValidate(letter){
    let idLetter = 0;
    if(letter >=65 && letter<=90){ idLetter = 65;}
    if(letter >=97 && letter<=122){ idLetter = 97;}
    if(letter >=48 && letter<=57){ idLetter = 48;}
    return idLetter;
  }
  export default cifrado;
  