let arr1 = [11, "friday", 13, "apple", 0, null, true];
arr1.forEach(function(item, index, _arr1) {
    // ... код для действий с item
    //console.log("Текущий элемент", index, item);
    if(item == 13){
        _arr1[1]="Monday";
    }
    console.log("array =", _arr1); 
    console.log("Source array = ", arr1);
  });
  
  