const botonNumeros=document.getElementsByName("data-number");
const botonOperar=document.getElementsByName("data-operar");
const botonBorrar=document.getElementsByName("data-borrar")[0];
const botonIgual=document.getElementsByName("data-igual")[0];

let result= document.getElementById("result");
let opeAnterior="";
let opeActual="";
let operacion=undefined;

botonNumeros.forEach(function(boton){
    boton.addEventListener("click", function(){
        agregarNumero(boton.innerText);
    })
});

botonOperar.forEach(function(boton){
    boton.addEventListener("click", function(){
        SelectOperacion(boton.innerText);
    })
});

botonIgual.addEventListener("click",function(){
    calcular();
    actualizardisplay();
});

botonBorrar.addEventListener("click", function(){
    clear();
    actualizardisplay();
});

function SelectOperacion(op){
    if(op == "") return;
    else if(op!==""){
        calcular()
    }
    operacion=op.toString();
    opeAnterior=opeActual;
    opeActual="";
}

function calcular(){
    let calculo;
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);
    if(isNaN(anterior) && isNaN(actual)) return;
    switch(operacion){
        case "+":
            calculo=anterior + actual
            break;

        case "-":
            calculo=anterior - actual
            break;

        case "x":
            calculo=anterior * actual
            break;

        case "/":
            calculo=anterior / actual
            break;

        default:
            return;
    }
    opeActual=calculo;
    operacion=undefined;
    opeAnterior="";

}

function agregarNumero(num){
    opeActual= opeActual.toString() + num.toString();
    actualizardisplay();
}

function clear(){
    opeActual="";
    opeAnterior="";
    operacion=undefined;
}

function actualizardisplay(){
    result.value= opeActual;
}

clear();
