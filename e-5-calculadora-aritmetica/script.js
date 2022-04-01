var resultado=0;
var numero1 = prompt("Ingrese numero 1");
var numero2 = prompt("Ingrese numero 2");
var operacion = prompt("ingrese operando");

numero1 = parseInt(numero1);
numero2 = parseInt(numero2);

/*
if(operacion === '+'){
    console.log(typeof numero1)
    resultado = numero1 + numero2   
}else if (operacion === '-'){
    resultado = numero1 - numero2;
}else if (operacion === '*'){
    resultado = numero1 * numero2;
}else if (operacion === '/'){
    resultado = numero1 / numero2;
}

*/
switch(operacion){
    case '+': //VALOR PARA COMPROBAR
    resultado = numero1 + numero2;
    break;
    case '-': //VALOR PARA COMPROBAR
    resultado = numero1 - numero2;
    break;
    case '*': //VALOR PARA COMPROBAR
    resultado = numero1 * numero2;
    break;
    case '/': //VALOR PARA COMPROBAR
    resultado = numero1 / numero2;
    break;
    default: //VALOR PARA COMPROBAR
    console.log('igresaste algo incorrecto');
    break;
}

console.log('resultado: ', resultado);

