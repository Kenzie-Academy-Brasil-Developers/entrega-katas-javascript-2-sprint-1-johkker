// comece a criar a sua função add na linha abaixo
function add(x, y) {
    let sumAdd = x+y
     return sumAdd
}


// descomente a linha seguinte para testar sua função
 console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(x, y) {
    let sumMultiply = 0
    for(let i = 1; i <= x; i++) {
        sumMultiply = add(sumMultiply, y)
     }
     return sumMultiply
    }
// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(x, n) {
    let multiplicador = x
    for(i = 2; i <= n; i++) {
        multiplicador = multiply(x, multiplicador)
    
        
    }
    return multiplicador
}

// descomente a linha seguinte para testar sua função
 console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(x) {
    sumFactorial = x
    for(let i = x-1; i >= 1; i--) {
        sumFactorial = multiply(sumFactorial, i)
    }
    return sumFactorial
}

// descomente a linha seguinte para testar sua função
 console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
function fibonacci(n) {
    let index = []
    let x = 0
    let y = 1
    
    for(let i = 0; i <= n; i++) {
        index[i] = x
        index[++i] = y
        x = add(x, y) 
        y = add(x, y)


    }
    return index[n]
}


// descomente a linha seguinte para testar sua função
console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
