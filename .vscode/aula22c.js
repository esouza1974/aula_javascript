var prop1 = "Isto é um exemplo";

var obj = {
    prop1: prop1
};
console.log(obj);

// agora com o ES6 pode fazer assim:

var prop2 = "Exemplo melhorado com o ES6";

var obj = {
    prop2
};
console.log(obj);

// o mesmo para definir métodos

function method1() {
    console.log('método chamado');
}
var obj = {
    method1
};
obj.method1();

// outro exemplo de método

var obj = {
    soma: function soma(a, b) {
        return a + b;
    }
};
console.log(obj.soma(1, 7));

// no exemplo acima pode ser suprimida a palavra "function", da seguinte forma

var obj = {
    soma2(a, b) {
        return a + b;
    }
}
console.log(obj.soma2(2, 4));

// outro exemplo

var propName = "Teste";

var obj = {};

obj[propName + ' Concatenado'] = 'Valor do prop';
console.log(obj);

// o ex. acima melhorado com o ES6

var propName2 = "Teste 2";

var obj = {
    [propName2 + ' concatena']: 'outro valor do prop'
};
console.log(obj);