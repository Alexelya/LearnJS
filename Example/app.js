var arrOfNumbers = [
    40, 250, 80, 88, 240, 12, 148
];


    var max = findMax(arrOfNumbers);
    console.log("Max  = ", max);

    // Находим максимальное значение в массиве, используя рекурсию
function findMax(arrOfNumbers)
{
    var max = -Infinity;

    // Перебираем элементы массива
    for(var i = 0; i < arrOfNumbers.length; i++)
    {
        var el = arrOfNumbers[i];

        if ( Array.isArray(el) )
        {
            el = findMax( el );
        }

        if ( el > max )
        {
            max = el;
        }
    }

    return max;
}

var min = findMin(arrOfNumbers);
console.log("Min  = ", min);
   // Находим минимальное значение в массиве, используя рекурсию
   function findMin(arrOfNumbers)
   {
       var min = Infinity;
   
       // Перебираем элементы массива
       for(var i = 0; i < arrOfNumbers.length; i++)
       {
           var el = arrOfNumbers[i];
   
           if ( Array.isArray(el) )
           {
               el = findMin( el );
           }
   
           if ( el < min )
           {
               min = el;
           }
       }
   
       return min;
   }
//console.log(arrOfNumbers.reduce(maxNumber))
//console.log(arrOfNumbers.reduce(minNumber))