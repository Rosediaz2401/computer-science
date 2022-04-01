
var arreglo = [2, 5, 19, 20, 33, 44, 4, 6, 9, 19, 35];

/*
for( var i=0; i<=arreglo.length;i++){
     var numero = arreglo[i];
     if(numero % 2 ===0){
         console.log('elemento: ', arreglo[i]);
     }
}
*/


var pares = 0;

while(pares < arreglo.length) {
    var numeroPar = arreglo[pares];
    if(numeroPar % 2 ===0){
        console.log('numero par:',arreglo[pares]);
    }
    pares++;
}

/*
// valorInicial
var j = 0;
// condicion
while(j < array.length) {
    console.log('w array[' + j + '] = ' + array[j]);
    // razonDeCambio
    j++;
}
*/