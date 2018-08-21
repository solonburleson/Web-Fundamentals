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

function DoubleVision(arr){
    for(var i = 0; i < arr.length; i++){
        arr[i] *= 2;
    }
    return arr;
}
console.log(DoubleVision([1,2,3]));

function EvensandOdds(arr){
    for(var i = 2; i < arr.length; i++){
        if(arr[i] % 2 !== 0 && arr[i-1] % 2 !== 0 && arr[i-2] % 2 !== 0){
            console.log("That's odd");
        }
        else if(arr[i] % 2 == 0 && arr[i-1] % 2 == 0 && arr[i-2] % 2 == 0){
            console.log("Even more so!");
        }
    }
}
EvensandOdds([1,1,3,4,6,8]);

function EvensandOdds(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0 && arr[i-1] % 2 !== 0 && arr[i] % 2 !== 0){
            console.log("That's odd");
        }
        else if(arr[i] % 2 == 0 && arr[i-1] % 2 == 0 && arr[i] % 2 == 0){
            console.log("Even more so!");
        }
    }
}
EvensandOdds([1,1,3,4,6,8]);

function incrementSeconds(arr){
    for(var i = 0; i < arr.length; i++){
        if(i % 2 !== 0){
            arr[i] += 1;
            console.log(arr[i]);
        }
        else{
            console.log(arr[i]);
        }
    }
    return arr;
}
console.log(incrementSeconds([1,2,3,4,5,6]));

function PreviousLengths(arr){
    for(var i = arr.length - 1; i > 0; i--){
        arr[i] = arr[i-1].length;        
    }
    return arr;
}
console.log(PreviousLengths(["hello","dojo","awesome"]));

function AddSevenToMost(arr){
    var newarr = [];
    for(var i = 0; i < arr.length; i++){
        newarr.push(arr[i]+7);
    }
    return newarr
}
console.log(AddSevenToMost([1,2,3,4,5]));

function ReverseArray(arr){
    var temp = 0;
    for(var i = 0; i < arr.length/2; i++){
        temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}
console.log(ReverseArray([2,4,6,1,3]));

function OutlookNegative(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] *= -1;
        }
    }
    return arr;
}
console.log(OutlookNegative([1,-3,5]));

function AlwaysHungry(arr){
var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == "food"){
            console.log("yummy");
            count++;
        }
    }
    if(count === 0){
        console.log("I'm hungry");
    }
}
AlwaysHungry(["food",3,5,4]);
AlwaysHungry([3,5,4]);

function SwaptowardCenter(arr){
    var temp = 0;
    temp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;
    for(var i = 1; i < arr.length/2; i++){
        if(i % 2 === 0 && i < arr.length / 2){
            temp = arr[i];
            arr[i] = arr[arr.length-i-1];
            arr[arr.length-i-1] = temp;
        }
    }
    return arr;
}
console.log(SwaptowardCenter(["pizza", 42, "Ada", 2, true]));
console.log(SwaptowardCenter([1,2,3,4,5,6]));

function ScaleArray(arr,x){
    for(var i = 0; i < arr.length; i++){
        arr[i] *= x;
    }
    return arr;
}
console.log(ScaleArray([1,2,3],3));