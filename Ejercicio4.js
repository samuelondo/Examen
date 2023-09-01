function obtenerCantidad(item, matriz){
    let cuenta = 0
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if(matriz[i][j] == item){
                cuenta++
            }
        }
    }
    console.log(cuenta)
}

matriz = [['2', '1', '1', '2'],
['2', '2'],
['1', '2', '1'],
['2', '2', '2', '1']];

obtenerCantidad('1',matriz)

