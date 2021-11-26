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
    if(idLetter === 0){ return letter;}
    if(idLetter === 48){ quantityLetter = 10;}
let position = (letter - idLetter + obtener) % quantityLetter;
    if(position < 0){ position = quantityLetter + position;}
    return (position + idLetter);
  }
  function letterValidate(letter){
    let idLetter = 0;
    if(letter >=65 && letter<=90){ idLetter = 65;}
    if(letter >=97 && letter<=122){ idLetter = 97;}
    if(letter >=48 && letter<=57){ idLetter = 48;}
    return idLetter;
  }
  export default cifrado;
  