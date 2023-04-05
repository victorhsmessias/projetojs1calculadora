let numberOne = Number(prompt('Insira o primeiro número:'))
let numberTwo = Number(prompt('Insira o segundo número:'))
let par = 
alert(`Soma: ${numberOne + numberTwo}`)
alert(`Subtração: ${numberOne - numberTwo}`)
alert(`Multiplicação: ${numberOne * numberTwo}`)
alert(`Divisão: ${(numberOne / numberTwo).toFixed(2)}`)
alert(`Resto da divisão: ${numberOne % numberTwo}`)
if ((numberOne + numberTwo)%2 == 0){
    alert('A soma dos dois números é par')
}else{
    alert('A soma dos dois números é impar')
}

if (numberOne == numberTwo){
    alert('Os dois números inseridos são iguais')
}else{
    alert('Os dois números inseridos são diferentes')
}