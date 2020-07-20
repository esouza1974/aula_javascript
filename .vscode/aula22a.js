// forma antiga de escrever função no JavaScript

var sumOld = function(a, b) {
    return a + b;
};

//console.log(sumOld(10, 5));

// Arrow functions =>

var sum = (a, b) => a + b;
console.log(sum(3, 10));

var createObj = () => ({test: 123});
console.log(createObj());

// função construtora (como era antes)
function Car() {
    this.foo = 'bar';
}

console.log(new Car());

// com arrow function não podemos criar funções construtora

// log no contexto
var obj = {
    showContext: function showContext() {
        var _that = this;
        setTimeout(function() {
            _that.log('after 1000ms');
        }, 1000);
    },
    log: function log(value) {
        console.log(value);
    }
};

obj.showContext();

// a funcao acima com arrow function

var obj = {
    showContext: function showContext() {
        // this = obj

        setTimeout(() => {
            this.log('after 1000ms 2');
        }, 1000);
    },
    log: function log(value) {
        console.log(value);
    }
};

obj.showContext();
