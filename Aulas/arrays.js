const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])

valores[4] = 10 // Adicionar valor ao array
console.log(valores)
console.log(valores.length) // Tamanho do array

valores.push("Anderson", false, null) // "Empurrar" valores para o array
console.log(valores)

console.log(valores.pop()) // Tira um elemento do array, neste caso o último
delete valores[0] // Deleta um elemento do array
console.log(valores)

console.log(typeof valores) // mostra o tipo do valor (neste caso como é um array ele retorna object)