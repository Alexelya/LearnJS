// Первоначально заданный массив

var arr = [4, 44, 3, 1, 6, 560, 999, 2, 90, 5];

// Определение того, сколько прогонов будет в утилите

// Реализация перебора со сдвигом

for (let j = arr.length - 1; j > 0; j--) {
  
    // внутри каждого «просмотра» - основной цикл

  // перебор всех компонентов до самого последнего в прогоне, определенном ранее
  
  for (let i = 0; i < j; i++) {
    
    // действие, если предыдущий компонент больше следующего
   
    if (arr[i] > arr[i + 1]) {
     
        // сохранение значения текущего элемента массива
      
        let temp = arr[i];
      
        // запись на текущее место следующий компонента
      
        arr[i] = arr[i + 1];
      
        // в следующую позицию устанавливается значение текущего – это и есть замена
      
        arr[i + 1] = temp;
    }
   
    // вывод состояния массива на экран
    // соответствующий шаг не обязателен
    
    console.log(arr);
  }
}
