function Sigma(x){
    var sum = 0;
    for(var i = 1; i <= x; i++){
        sum+=i;
    }
    return sum;
}
console.log(Sigma(5));

function Factorial(x){
    var fac = 1;
    for(var i = 1; i <= x; i++){
        fac *= i;
    }
    return fac;
}
console.log(Factorial(5));

function Fibonacci(x){
    var fib = [0,1];
    var sum = 0;
    if(x === 0){
        sum = 0;
    }
    else if(x === 1){
        sum = 1;
    }
    for(var i = 2; i <= x; i++){
        sum = fib[0] + fib[1];
        fib.shift();
        fib.push(sum);
    }
    return sum;
}
console.log(Fibonacci(6));

function SecondtoLast(arr){
    if(arr.length >= 3){
        return arr[arr.length-2]
    }
    else if(arr.length < 3){
        return null;
    }
}
console.log(SecondtoLast([42,true,4,"Liam",7]));
console.log(SecondtoLast([1,2]));

function NthtoLast(arr,x){
    if(arr.length >= x+1){
        return arr[arr.length-x]
    }
    else if(arr.length < x+1){
        return null;
    }
}
console.log(NthtoLast([5,2,3,6,4,9,7],3));

function SecondLargest(arr){
    var max = arr[0];
    var second = 0;
    if(arr.length > 2){
        for(var i = 0; i < arr.length; i++){
            if(arr[i] > max){
                max = arr[i];
            }
            else if(arr[i] < max && arr[i] > second){
                second = arr[i];
            }
        }
    }
    else{
        second = null;
    }
    return second;
}
console.log(SecondLargest([42,1,4,3.14,7]));

function DoubleTrouble(arr){
    var i = 0;
    while(i < arr.length){
        arr.splice(i,0,arr[i]);
        i += 2;
    }
    return arr;
}
console.log(DoubleTrouble([4,"Ulysses",42,false]));