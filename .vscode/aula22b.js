function multiply(a = 2, b = 1) {
    return a * b;
}
console.log(multiply(undefined, 5));

function multip2(a, b = a) {
    return a * b;
}
console.log(multip2(5));

// Lazy evaluation
function randomNumber() {
    console.log('Gerando um número randômico...');
    return Math.random() * 10;
}

function multip3 (a, b = randomNumber()) {
    return a * b;
}
console.log(multip3(5));
console.log(multip3(5));