function Fib(n){
    if(n == 0 || n == 1){
        return n;
    }
    return Fib(n-2) + Fib(n-1);
}
console.log(Fib(20));