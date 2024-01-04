

import fs from 'fs'

let arr = fs.readFileSync('./input.txt', 'utf-8').trim().split('\r\n')


const parte1 = function (array){
  
    let primerValor = 0;
    let segundoValor = 0;
    

    //console.log(array);

    for (let i = 0; i < array.length; i++) {
        const line = array[i];


        for (let j = 0; j < line.length; j++) {
           const letra = line[j];
           if(!isNaN(letra)){
            let num = parseInt(letra)
            primerValor += num
            console.log(primerValor);
            break;
           }
          
        }
        for (let k = line.length -1 ; k >= 0; k--) {
            const letra = line[k];
            if(!isNaN(letra)){
             let num = parseInt(letra)
             segundoValor += num
             console.log(segundoValor);
             break;
            }
           
         }
         
    }
    let sum = primerValor * 10 + segundoValor
         return sum
};

const resultado = parte1(arr);
console.log(resultado);



