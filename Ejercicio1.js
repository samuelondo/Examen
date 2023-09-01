function numeroMayor(matriz){
   let mayor = matriz[0][0]
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if(matriz[i][j] > mayor){
                mayor = matriz[i][j]
            }
        }
    }
    console.log(mayor)
}


matriz1 = [[1,2,3,4],
          [16,5,6,7],
          [8,9,10,108],
          [25,34,44,68]];

numeroMayor(matriz1)
