import cifrado from './encriptar.js';
/*constantes*/
const txtmsj = document.getElementById("msj");
const count = document.getElementById("cantidad");
const obtener = document.getElementById("obtener");
const btnCipher = document.getElementById("cifrar");
const btnDecipher = document.getElementById("decifrar");
const resultado = document.getElementById("resultado");
const txtmensajeResultado = document.getElementById("mensajeResultado");
const btnCopy = document.getElementById("copy");
const modalC = document.getElementsByClassName("modalcontenedor")[0];
const modal = document.getElementsByClassName("modal")[0];

txtmsj.addEventListener("keyup", () =>{
    count.innerHTML = txtmsj.value.length + "/280";
});
/*funcion cifrar*/
btnCipher.addEventListener("click",()=>{
    if(txtmsj.value == ""){
        alert("No olvides escribir tu mensaje secreto.");
    }else if(obtener.value == ""){
        alert("No olvides ingresar tu clave secreta.");
    }else{
        resultado.innerHTML = "<b>Su mensaje cifrado es</b> ";
        let mensajeresultado = cifrado.encode(parseInt(obtener.value),txtmsj.value);
        txtmensajeResultado.innerHTML = mensajeresultado;
    }
});
/*funcion descifrar*/
btnDecipher.addEventListener("click",()=>{
    if(txtmsj.value == ""){
        alert("No olvides escribir tu mensaje secreto.");
    }else if(obtener.value == ""){
        alert("No olvides ingresar tu clave secreta.");
    }else{
        resultado.innerHTML = "<b>Su mensaje descifrado es</b> ";
        let mensajeResultado = cifrado.decode(parseInt(obtener.value),txtmsj.value);
        txtmensajeResultado.innerHTML = mensajeResultado;
    }
});
/*copiar*/
btnCopy.addEventListener("click",()=>{
    txtmensajeResultado.select();
    document.execCommand("copy");
    setTimeout(()=>{
        btnCopy.textContent = "Copiado";
    }, 100);
});