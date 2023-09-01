let cuenta = [];
function cuentaRegresiva(numeroInicial){
    for (let i = numeroInicial; i >= 0; i--){
        let numero = i
        cuenta.push(numero)    
    }
    console.log(cuenta)
}

cuentaRegresiva(10)
