function calificaciones (c1, c2, c3, c4, c5, c6){
    const sumacalif = c1+c2+c3+c4+c5+c6;
    return sumacalif;
}

const sumacalif = calificaciones (6, 8 , 9, 2, 5, 10);
console.log("la suma de las calificaciones es:", sumacalif)

function promedio (){
    const promediocalif = sumacalif / 6;
    return promediocalif;
}

const promediofinal = promedio()
console.log("El promedio de las calificaciones es:", promediofinal)

//          OTRA OPCION

// function calificaciones (c1, c2, c3, c4, c5, c6){
//     const calcpromedio = c1+c2+c3+c4+c5+c6;
//     return calcpromedio/6;
// }

// const promediofinal = calificaciones (6, 8 , 9, 2, 5, 10);
// console.log("El promedio final es:", promediofinal)