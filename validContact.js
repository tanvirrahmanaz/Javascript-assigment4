function validContact(number) {
    if (typeof number !== 'string') {
        return "Invalid";
    }
    if (number.length !== 11) {
        return false;
    }
    if (!number.startsWith('01')) {
        return false;
    }
    if (number.includes(' ')) {
        return false;
    }
    return true;
}


console.log(validContact('01819234567'))
console.log(validContact('0181923 456'))
console.log(validContact('018192345679'))
console.log(validContact('01345678900'))
console.log(validContact('02145678900'))
console.log(validContact(["01987654321"]))
console.log(validContact(true))