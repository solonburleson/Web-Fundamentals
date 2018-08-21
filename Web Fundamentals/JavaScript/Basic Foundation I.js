function ReturnArray(x,y){
    var arr = [];
    for(x; x <= y; x++){
        arr.push(x);
    }
  return arr;
}
console.log(ReturnArray(1,255));

function EvenThousand(x){
    var sum = 0;
    for(x; x <= 1000; x++){
      if(x%2 === 0){
        sum += x;
      }
    }
    return sum;
  }
  console.log(EvenThousand(0));

function OddFiveK(x){
    var sum = 0;
    for(x; x < 5000; x++){
        if(x%2 !== 0){
            sum += x;
        }
    }
    return sum;
}
console.log(OddFiveK(0));

function SumArray(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
console.log(SumArray([1,2,5]));

function FindMax(arr){
    var max = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
console.log(FindMax([-3,3,5,7]));

function FindAvg(arr){
    var sum = 0;
    var avg = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    avg = sum / arr.length;
    return avg;
}
console.log(FindAvg([1,3,5,7,20]));

function OddArray(x,y){
    var arr = [];
    for(x; x <= y; x++){
        if(x % 2 !== 0){
        arr.push(x);
        }
    }
    return arr;
    }
console.log(OddArray(1,50));

function GreaterthanY(arr,Y){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > Y){
            count++;
        }
    }
    return count;
}
console.log(GreaterthanY([1,3,5,7],3));

function Squares(arr){
    for(var i = 0; i < arr.length; i++){
        arr[i] *= arr[i];
    }
    return arr;
}
console.log(Squares([1,5,10,-2]));

function NoNegatives(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr;
}
console.log(NoNegatives([1,2,10,-3]));

function MaxMinAvg(arr){
    var max = arr[0];
    var min = arr[0];
    var avg = 0;
    var sum = 0;
    var newarr = [];
    for( var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        else if(arr[i] < min){
            min = arr[i];
        }
        sum += arr[i];
    }
    avg = sum / arr.length;
    newarr.push(max);
    newarr.push(min);
    newarr.push(avg);
    return newarr;
}
console.log(MaxMinAvg([1,5,10,-2]));

function SwapValues(arr){
    var temp = 0;
    arr[0] = temp;
    arr[0] = arr[arr.length-1]
    arr[arr.length-1] = temp;
    return arr; 
}
console.log(SwapValues([1,5,10,-2]));

function NumtoString(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = "Dojo";
        }
    }
    return arr;
}
console.log(NumtoString([-1,-3,2]));