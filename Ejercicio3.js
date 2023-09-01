function longitud(matriz) {
  let mayorLongitud = 0; 
  let filaMasLarga = 0; 
  
  for (let i = 0; i < matriz.length ; i++) {
    if (matriz[i].length > mayorLongitud) {
      mayorLongitud = matriz[i].length; 
      filaMasLarga = matriz[i];
    }
  }

  console.log(filaMasLarga);
}

const matriz = [
  [1,2,3,4,5],
  [1,2,3,4,5,5,5,5,5,5],
  [1,2,3,5,6,7,8]
];

longitud(matriz);