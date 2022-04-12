function factorialize(n) {
    if (n<0) {
        return "error, that is not natural number";
    }
    else if (n===0 || n===1) {
        return 1;
    } else {
        return n*factorialize(n-1)
    } 
}console.log(factorialize(5));