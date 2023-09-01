function matrizCuadrada(matriz) {
    const cantidadFilas = matriz.length;
    for (let i = 0; i < cantidadFilas; i++) {
      if (matriz[i].length !== cantidadFilas) {
        return false; 
      }
    }
    return true;
  }
  
  const matriz = [[1,2,3],
                 [4,5,6],
                 [7,8,9,]];


console.log(matrizCuadrada(matriz));