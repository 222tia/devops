exports.factorial = function(n) {
    if (n<0)
        return undefined;
    if(n==0 || n==1)
        return n;
    return this.factorial(n-1) * n;
}