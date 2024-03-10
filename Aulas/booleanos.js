let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // ! = negação

// Verdadeiros:

console.log(!!3) // Números
console.log(!!-1)
console.log(!!" ") // Texto
console.log(!![]) // Arranjos
console.log(!!{})
console.log(!!Infinity) // Constantes
console.log(!!(isAtivo=true)) // Valores verdadeiros

// Falsos:

console.log(!!0) // Zero
console.log(!!"") // Strings Vazias
console.log(!!null) // Nulo
console.log(!!NaN) // Não é número
console.log(!!undefined) // Indefinido
console.log(!!(isAtivo=false)) // Valores negativos
