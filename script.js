var botonEncriptar = document.querySelector ('.Boton-Encriptar');
var botonDesencriptar = document.querySelector ('.Boton-Desencriptar');
var muñeco = document.querySelector ('.muñeco');
var cajaParrafo = document.querySelector ('.caja-parrafo');
var textoResultado = document.querySelector ('.texto-resultado');

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar() {
    esconderAdelante();
    const cajaTexto = recuperarTexto();
    textoResultado.textContent = encriptarTexto(cajaTexto);
    mostrarResultadoConAnimacion();
}

function desencriptar() {
    esconderAdelante();
    const cajaTexto = recuperarTexto();
    textoResultado.textContent = desencriptarTexto(cajaTexto);
    mostrarResultadoConAnimacion();
}

function mostrarResultadoConAnimacion() {
    textoResultado.classList.add("aparecer");

    // Elimina la clase después de que termine la animación
    setTimeout(() => {
        textoResultado.classList.remove("aparecer");
    }, 500); // Ajusta el tiempo según la duración de la animación en CSS
}

function esconderAdelante(){
    muñeco.classList.add("esconder");
    cajaParrafo.classList.add("esconder");
}

function recuperarTexto(){
    var cajaTexto = document.querySelector(".cajaTexto")
    return cajaTexto.value
 }

 function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoResultado = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoResultado = textoResultado + "ai"
        }
        else if(texto[i] == "e"){
            textoResultado = textoResultado + "enter"
        }
        else if(texto[i] == "i"){
            textoResultado = textoResultado + "imes"
        }
        else if(texto[i] == "o"){
            textoResultado = textoResultado + "ober"
        }
        else if(texto[i] == "u"){
            textoResultado = textoResultado + "ufat"
        }
        else{
            textoResultado = textoResultado + texto[i]
        }
    }
    return textoResultado;

}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoResultado = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoResultado = textoResultado + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoResultado = textoResultado + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoResultado = textoResultado + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoResultado = textoResultado + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoResultado = textoResultado + "u"
            i = i+3;
        }
        else{
            textoResultado = textoResultado + texto[i];
        }
        
    }

    return textoResultado;

}

const botonCopiar = document.querySelector(".bonton-copiar"); 
    botonCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido); 
});
