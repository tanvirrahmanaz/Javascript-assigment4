function calculateVAT(price) {
    if (typeof price !== 'number' || price <= 0) {
        return "Invalid";
    }
    
    return price * 7.5 / 100;
}

console.log(calculateVAT(7.5))
console.log(calculateVAT(100))
console.log(calculateVAT("98"))
console.log(calculateVAT(-99))
console.log(calculateVAT('foo'))