/*PARA ACCEDER A ATRIBUTOS DE HTML SE USA
.querySelector(" ") COMO PARAMETRO LA ETIQUETA A 
MODIFICAR */
/*EL .innerHTML SE PUEDE ASIGNAR VALORES O TEXTO*/
/*SE CREA LA FUNCION LLAMANDO AL DEL HTML*/
let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados=[];
let numeroMaximo = 10;
condicionesIniciales();

function asignarTextoElemnto(elemto,texto){
    let elemtohtml = document.querySelector(elemto);
    elemtohtml.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemnto("p", `Acertaste el numero! en ${intentos}
            ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else{
        //El usuario no acerto
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemnto("p","El numero secreto es menor");
        }else{
            asignarTextoElemnto("p","El numero secreto es mayor");
        }
        intentos ++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja(){
    document.querySelector("#valorUsuario").value ="";
}
function generarNumeroSecreto() {
    let numeroGnerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(listaNumerosSorteados)

    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemnto("p","Ya se sortearon todos los numeros posibles");
        return;
    }else{
    //Si el numero generado esta incluido en la lista 
        if(listaNumerosSorteados.includes(numeroGnerado)){
            return generarNumeroSecreto() ;
        }else{
            listaNumerosSorteados.push(numeroGnerado);
            return numeroGnerado;
        }
    }
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //Generar numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar caja
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}


function condicionesIniciales() {
    asignarTextoElemnto("h1","Juego del Numero Secreto!");
    asignarTextoElemnto("p",`Escoge un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    intentos = 1;
    console.log(listaNumerosSorteados);
    limpiarCaja();
    return;
}