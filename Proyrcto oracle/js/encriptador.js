//----- selecion de elementos------//
const btnencrintar = document.querySelector(".btnEncriptar");
const txtEncriptar = document.querySelector(".Encriptar");
const textoAviso = document.querySelector(".texto");
const respuesta = document.querySelector (".evaluar");
const contenido = document.querySelector(".tarjeta-contenedor");
const btnCopiar = document.querySelector(".Btn-copiar");
const btndesencriptar = document.querySelector (".btnDesencriptar");


//--- boton encriptar---//
btnencrintar .addEventListener("click" , e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g,"");
    console.log(txt);
    if(texto == ""){
        textoAviso.style.background = "#0A3871";
        textoAviso.style.color = "#FFFF";
        textoAviso.style.fontWeight = "800";
        textoAviso.textContent = " El campo de texto no debe estar vacio";

setTimeout(()=>{
    textoAviso.removeAttribute("style");
},1500);

    }

else if (texto !== txt) {
    textoAviso.style.background = "#0A3871";
    textoAviso.style.color = "#FFFF";
    textoAviso.style.fontWeight = "800";
    textoAviso.textContent = "No debe tener acentos y caracteres especiales";

setTimeout(()=>{
textoAviso.removeAttribute("style");
},1500);
    
}

else if(texto !== texto.toLowerCase()) {
    textoAviso.style.background = "#0A3871";
    textoAviso.style.color = "#FFFF";
    textoAviso.style.fontWeight = "800";
    textoAviso.textContent = "El texto debe ser todo en minuscula";

setTimeout(()=>{
textoAviso.removeAttribute("style");
},1500);
    
}
else{
    texto = texto.replace(/e/mg, "enter");
    texto = texto.replace(/i/mg, "imes");
    texto = texto.replace(/a/mg, "ai");
    texto = texto.replace(/o/mg, "ober");
    texto = texto.replace(/u/mg, "ufat");

    respuesta.innerHTML = texto;
    btnCopiar.style.visibility = "inherit";
    contenido.remove();
    
}

})

//--- boton desencriptar---//
btndesencriptar .addEventListener("click" , e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g,"");
    console.log(txt);
    if(texto == ""){
        textoAviso.style.background = "#0A3871";
        textoAviso.style.color = "#FFFF";
        textoAviso.style.fontWeight = "800";
        textoAviso.textContent = " El campo de texto no debe estar vacio";

setTimeout(()=>{
    textoAviso.removeAttribute("style");
},1500);

    }

else if (texto !== txt) {
    textoAviso.style.background = "#0A3871";
    textoAviso.style.color = "#FFFF";
    textoAviso.style.fontWeight = "800";
    textoAviso.textContent = "No debe tener acentos y caracteres especiales";

setTimeout(()=>{
textoAviso.removeAttribute("style");
},1500);
    
}

else if(texto !== texto.toLowerCase()) {
    textoAviso.style.background = "#0A3871";
    textoAviso.style.color = "#FFFF";
    textoAviso.style.fontWeight = "800";
    textoAviso.textContent = "El texto debe ser todo en minuscula";

setTimeout(()=>{
textoAviso.removeAttribute("style");
},1500);
    
}
else{
    texto = texto.replace(/enter/mg, "e");
    texto = texto.replace(/imes/mg, "i");
    texto = texto.replace(/ai/mg, "a");
    texto = texto.replace(/ober/mg, "o");
    texto = texto.replace(/ufat/mg, "u");

    respuesta.innerHTML = texto;
    btnCopiar.style.visibility = "inherit";
    contenido.remove();
    
}

});
//--- boton copiar---//
btnCopiar .addEventListener("click" , e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy");
 })