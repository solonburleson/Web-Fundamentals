function makeitBig(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] = "big";
        }
    }
    return arr;
}
console.log(makeitBig([-1,3,5,-5]));

function PrintLowReturnHigh(arr){
    var min = arr[0];
    var max = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        else if(arr[i] < min){
            min = arr[i];
        }
    }
    console.log(min);
    return max;
}
console.log(PrintLowReturnHigh([1,3,5,7]));

function PrintOneReturnAnother(arr){
    console.log(arr[arr.length-2]);
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            return arr[i];
            break;
        }
    }
}
console.log(PrintOneReturnAnother([2,4,6,7,10,8]));

function ReverseArray(arr){
    var temp = 0;
    for(var i = 0; i < arr.length; i++){
        temp = arr[i];
        arr[i] = arr[arr.length-1-x];
        arr[arr.length-1-x] = temp;
    }
    return arr;
}
console.log(ReverseArray([2,4,6,1,3]));